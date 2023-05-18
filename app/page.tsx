import EMailIcon from '@/images/email-outline.svg'
import GitHubIcon from '@/images/github.svg'
import HandWaveIcon from '@/images/hand-wave-outline.svg'
import MaikImage from '@/images/maik.jpg'
import TwitterIcon from '@/images/twitter.svg'
import WeatherNightIcon from '@/images/weather-night.svg'
import WeatherSunnyIcon from '@/images/weather-sunny.svg'
import EmptyImage from '@/projects/images/empty.png'
import projects, { Project } from '@/projects/projects'
import clsx from 'clsx'
import Image from 'next/image'

export default function Home() {
  const activeProjects = projects.filter((p) => !p.endYear)
  const inactiveProjects = projects.filter((p) => !!p.endYear)

  return (
    <>
      <main>
        <div className="mb-24 mt-12">
          <div className="flex flex-col gap-20">
            <MaikSectionContents />

            <section>
              <QuoteSectionContents />
            </section>

            <section className="py-6 dark:bg-slate-700">
              <ProjectCardsListSectionContents
                sectionBgColorClassName="dark:bg-slate-700"
                cardColorClassName="dark:border-slate-500 dark:bg-slate-600 dark:shadow-slate-800"
                cardHoverColorClassName="transition-[border,_box-shadow,_transform] duration-75 hover:z-10 hover:scale-105 hover:shadow-lg hover:duration-100 hover:dark:border-slate-400"
                titleIcon={WeatherSunnyIcon}
                title="Ongoing Projects"
                projects={activeProjects}
              />
            </section>

            <section>
              <ProjectCardsListSectionContents
                sectionBgColorClassName="dark:bg-slate-800"
                cardHoverColorClassName="transition-[border,_box-shadow,_transform] duration-75 hover:z-10 hover:scale-105 hover:shadow-lg hover:duration-100 hover:dark:border-slate-500"
                titleIcon={WeatherNightIcon}
                title="Past Projects"
                projects={inactiveProjects}
              />
            </section>
          </div>
        </div>
      </main>

      {/* {import.meta.env.DEV && (
        <div className="isolate">
          <div className="fixed top-5 right-5 rounded-lg bg-white p-5 shadow-md dark:bg-slate-700">
            <Outline />
          </div>

          <BreakpointReadout className="fixed right-2 top-2 opacity-80" />
        </div>
      )} */}
    </>
  )
}

const MaikSectionContents = () => (
  <div className="mx-5 sm:mx-8">
    <div className="container mx-auto 2xl:max-w-screen-xl">
      <MaikCard />
    </div>
  </div>
)

const MaikCard = () => (
  <Card className="mx-auto flex w-full flex-col md:w-3/4 xl:grid xl:w-auto xl:max-w-screen-lg xl:grid-cols-2">
    <div className="relative">
      <figure className="w-full xl:h-full">
        <picture className="w-full">
          <Image
            src={MaikImage}
            className="w-full rounded-t-xl xl:h-full xl:rounded-l-xl xl:object-cover"
            priority
            alt="Maik"
          />
        </picture>
      </figure>

      <div className="absolute bottom-0 h-1/8 w-full dark:bg-gradient-b-slate-800 xl:right-0 xl:top-0 xl:h-full xl:w-1/8 dark:xl:bg-gradient-r-slate-800"></div>
    </div>

    <div className="flex flex-col px-6 md:px-8 xl:gap-5 xl:py-8">
      <div className="sticky top-0 flex flex-row items-center gap-3 py-6 dark:bg-slate-700 md:py-8 xl:static xl:top-auto xl:py-0">
        <H1 titleIcon={HandWaveIcon} title="Hi, I'm Maik" />
      </div>

      <section>
        <h2 className="sr-only">About Me</h2>

        <div className="mb-6 flex flex-col gap-5 md:mb-8 xl:mb-0">
          <p className="my-0">
            Born in 1978, I&nbsp;began developing software in 1994. I&nbsp;started working for{' '}
            <a href="https://subshell.com" rel="noopener noreferrer" className="dark:text-bzyellow">
              subshell GmbH
            </a>{' '}
            in Hamburg, Germany, in 2003, where I&nbsp;am currently working on our flagship product, Sophora CMS, as
            well as various other projects. I&nbsp;am still working for subshell to this day.
          </p>

          <p className="my-0">
            I&nbsp;have experience with many different technologies and programming languages, including Java, Go,
            React, C#, and C. As projects come and go, I&nbsp;use frontend/
            <wbr />
            backend frameworks, databases, and other technologies as needed. I&nbsp;am always trying to stay up-to-date
            with the latest technologies.
          </p>

          <p className="my-0">
            In my spare time, I&nbsp;work on a variety of different projects, most of which are open source. You can see
            some of these projects below.
          </p>

          <p className="my-0">I&nbsp;am always happy to connect with others:</p>

          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <a href="mailto:maik@schreiber.ms" className="flex flex-row items-center gap-2">
              <EMailIcon className="h-5 w-5 items-center dark:fill-bzyellow" />
              <div className="inline-block dark:text-bzyellow">maik@schreiber.ms</div>
            </a>

            <a href="https://github.com/blizzy78" rel="noopener noreferer" className="flex flex-row items-center gap-2">
              <GitHubIcon className="h-5 w-5 items-center dark:fill-bzyellow" />
              <div className="inline-block dark:text-bzyellow">@blizzy78</div>
            </a>

            <a
              href="https://twitter.com/blizzy78"
              rel="noopener noreferer"
              className="flex flex-row items-center gap-2"
            >
              <TwitterIcon className="h-5 w-5 items-center dark:fill-bzyellow" />
              <div className="inline-block dark:text-bzyellow">@blizzy78</div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </Card>
)

const QuoteSectionContents = () => (
  <>
    <h2 className="sr-only">My Favorite Quote</h2>

    <blockquote className="mx-5 flex flex-col items-center gap-4 sm:mx-8 lg:gap-3">
      <div className="flex flex-col items-center gap-2 lg:gap-1">
        <p className="text-center text-xl italic">
          Any fool can write code <br className="md:hidden" />
          that a computer can understand.
        </p>

        <p className="text-center text-xl italic">
          Good programmers write code <br className="md:hidden" />
          that <strong className="bold">humans</strong> can understand.
        </p>
      </div>

      <p className="dark:text-slate-400">&mdash; Martin Fowler</p>
    </blockquote>
  </>
)

const ProjectCardsListSectionContents = ({
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
  titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
  projects: readonly Project[]
}) => (
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

const ProjectCardsList = ({
  cardColorClassName,
  cardHoverColorClassName,
  projects,
}: {
  cardColorClassName?: string
  cardHoverColorClassName?: string
  projects: readonly Project[]
}) => (
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
    {projects.map((p) => (
      <article key={p.title} className="grid grid-cols-1">
        <ProjectCard colorClassName={cardColorClassName} hoverColorClassName={cardHoverColorClassName} project={p} />
      </article>
    ))}
  </div>
)

const ProjectCard = ({
  colorClassName,
  hoverColorClassName,
  project,
}: {
  colorClassName?: string
  hoverColorClassName?: string
  project: Project
}) => (
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
        <h3 className="font-headline text-lg font-semibold">{project.title}</h3>

        <div>{project.description}</div>
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

const Card = ({
  className,
  colorClassName = 'dark:border-slate-600 dark:bg-slate-700 dark:shadow-slate-900',
  hoverColorClassName = 'hover:dark:border-slate-500 transition-[border] duration-200',
  url,
  children,
}: {
  className?: string
  colorClassName?: string
  hoverColorClassName?: string
  url?: string
  children: React.ReactNode
}) => {
  const cssClass = clsx('rounded-xl border shadow', className, colorClassName, !!url && hoverColorClassName)

  if (!!url) {
    return (
      <a href={url} rel="noopener noreferrer" className={cssClass}>
        {children}
      </a>
    )
  }

  return <div className={cssClass}>{children}</div>
}

const H1 = ({
  titleIcon,
  title,
}: {
  titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
}) => {
  const TitleIcon = titleIcon

  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex flex-row items-center gap-3">
        <TitleIcon className="inline-block h-8 w-8 fill-slate-300" aria-hidden />

        <div className="inline-block font-headline text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
          {title}
        </div>
      </h1>
    </div>
  )
}

const H2 = ({
  titleIcon,
  title,
}: {
  titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
}) => {
  const TitleIcon = titleIcon

  return (
    <h2 className="flex flex-row items-center gap-3">
      <TitleIcon className="inline-block h-8 w-8 fill-slate-300" aria-hidden />

      <div className="inline-block font-headline text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
        {title}
      </div>
    </h2>
  )
}
