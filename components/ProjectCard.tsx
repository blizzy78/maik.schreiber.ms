import EmptyImage from '@/projects/images/empty.png'
import { Project } from '@/projects/projects'
import clsx from 'clsx'
import Image from 'next/image'
import Card from './Card'

export default function ProjectCard({
  colorClassName,
  hoverColorClassName,
  project,
}: {
  colorClassName?: string
  hoverColorClassName?: string
  project: Project
}) {
  return (
    <Card
      url={project.url}
      className="flex flex-col"
      colorClassName={colorClassName}
      hoverColorClassName={hoverColorClassName}
    >
      <div className={clsx('flex-shrink-0', !!project.image ? 'relative' : 'hidden md:block')}>
        <figure>
          <picture>
            {!!project.image && (
              <Image
                src={project.image}
                width={800}
                height={356}
                className="w-full rounded-t-xl"
                alt={project.title}
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              />
            )}

            {!project.image && (
              <Image
                src={EmptyImage}
                width={800}
                height={356}
                className="w-full rounded-t-xl"
                alt=""
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              />
            )}
          </picture>
        </figure>

        {!!project.image && <div className="absolute bottom-0 h-1/8 w-full dark:bg-gradient-b-slate-800"></div>}
      </div>

      <div className="flex flex-grow flex-col gap-6 p-6">
        <div className="flex flex-grow flex-col gap-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          <div className="text-pretty">{project.description}</div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="text-sm">
            <div className="inline text-bzyellow">Technologies:</div> {project.technologies.join(', ')}
          </div>

          <div className="text-sm">
            <div className="inline text-bzyellow">Active:</div>{' '}
            {!!project.endYear ? (
              project.endYear > project.startYear ? (
                <>
                  {project.startYear}&ndash;{project.endYear}
                </>
              ) : (
                project.startYear
              )
            ) : (
              'Since ' + project.startYear
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
