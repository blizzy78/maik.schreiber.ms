import type { Project } from '@/projects/projects'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import clsx from 'clsx'
import { H2 } from './Headline'
import ProjectCardsList from './ProjectCardsList'

export default function ProjectCardsListSectionContents({
  sectionBgColorClassName,
  cardColorClassName,
  cardHoverColorClassName,
  titleIcon,
  title,
  projects,
}: {
  sectionBgColorClassName: string
  cardColorClassName?: string
  cardHoverColorClassName?: string
  titleIcon: IconProp
  title: string
  projects: readonly Project[]
}) {
  return (
    <div className="isolate flex flex-col gap-8">
      <div className={clsx('sticky top-0 z-10 flex flex-row justify-center py-5', sectionBgColorClassName)}>
        <H2 titleIcon={titleIcon} title={title} />
      </div>

      <div className="mx-5 sm:mx-8">
        <div className="container isolate mx-auto pb-8 2xl:max-w-screen-xl">
          <ProjectCardsList
            cardColorClassName={cardColorClassName}
            cardHoverColorClassName={cardHoverColorClassName}
            projects={projects}
          />
        </div>
      </div>
    </div>
  )
}
