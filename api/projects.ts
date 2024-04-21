import { z } from 'zod'
import { URISchema } from './types'

export const ProjectSchema = z.object({
  url: URISchema,
  title: z.string().min(1),
  description: z.string().min(1),
  technologies: z.array(z.string().min(1)),
  startYear: z.number().int().min(1900).max(2100),
  endYear: z.number().int().min(1900).max(2100).optional(),
  image: z.string().optional(),
})

export type Project = z.infer<typeof ProjectSchema>
