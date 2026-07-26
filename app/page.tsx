import { getProjects } from '@/api/server/projects'
import Portfolio from '@/components/Portfolio'

export default async function Page() {
  const projects = await getProjects()
  const sortedProjects = projects.toSorted((a, b) => {
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear
    }

    if (a.endYear && b.endYear && a.endYear !== b.endYear) {
      return b.endYear - a.endYear
    }

    return a.title.localeCompare(b.title)
  })

  return (
    <Portfolio
      ongoingProjects={sortedProjects.filter((project) => !project.endYear)}
      pastProjects={sortedProjects.filter((project) => project.endYear)}
    />
  )
}
