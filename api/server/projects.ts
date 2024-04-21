import 'server-only'

import { parse as parseJson } from '@hapi/bourne'
import * as fs from 'fs/promises'
import { ProjectSchema } from '../projects'

export async function getProjects() {
  const entries = await fs.readdir('projects', { withFileTypes: true })

  const names = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => n.endsWith('.json'))
    .map((n) => n.replace(new RegExp('.json$'), ''))

  const images = new Map(
    await Promise.all(
      names.map(async (name) => {
        const file = `public/project-images/${name}.png`

        try {
          const stats = await fs.stat(file)
          return [name, stats.isFile()] as const
        } catch {
          // ignore
        }

        return [name, false] as const
      }),
    ),
  )

  return await Promise.all(
    names.map(async (name) => {
      const file = `projects/${name}.json`
      const buffer = await fs.readFile(file)
      const json = buffer.toString('utf8')

      const project = ProjectSchema.parse(parseJson(json))

      project.image = images.get(name) ? `${name}.png` : undefined

      return project
    }),
  )
}
