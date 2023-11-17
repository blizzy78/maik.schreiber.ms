import { Project } from '@/projects/projects'
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
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((p) => (
        <article key={p.title} className="grid grid-cols-1">
          <ProjectCard colorClassName={cardColorClassName} hoverColorClassName={cardHoverColorClassName} project={p} />
        </article>
      ))}
    </div>
  )
}
