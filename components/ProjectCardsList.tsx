import type { Project } from '@/api/projects'
import ProjectCard from './ProjectCard'

export default function ProjectCardsList({
  cardColorClassName,
  cardHoverColorClassName,
  projects,
}: {
  cardColorClassName?: string
  cardHoverColorClassName?: string
  projects: readonly Project[]
}) {
  const sortedProjects = projects.toSorted((a, b) => {
    if (a.startYear !== b.startYear) {
      return b.startYear - a.startYear
    }

    if (!!a.endYear && !!b.endYear && a.endYear !== b.endYear) {
      return b.endYear - a.endYear
    }

    return a.title.localeCompare(b.title)
  })

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
      {sortedProjects.map((p) => (
        <article key={p.title} className="grid grid-cols-1">
          <ProjectCard colorClassName={cardColorClassName} hoverColorClassName={cardHoverColorClassName} project={p} />
        </article>
      ))}
    </div>
  )
}
