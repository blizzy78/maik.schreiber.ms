import '@fontsource/arvo'
import '@fontsource/lato'
import classNames from 'classnames'
import { ReactNode } from 'react'
import * as Helmet from 'react-helmet'
import { BreakpointReadout } from './BreakpointReadout'
import { ReactComponent as HandWaveIcon } from './icons/hand-wave-outline.svg'
import { ReactComponent as WeatherNightIcon } from './icons/weather-night.svg'
import { ReactComponent as WeatherSunnyIcon } from './icons/weather-sunny.svg'
import * as MaikImage from './maik.jpg'
import * as EmptyImage from './projects/empty.png'
import * as Projects from './projects/projects'
import * as SocialImage from './social.png'

export const App = (): JSX.Element => {
  const activeProjects = Projects.Projects.filter(p => !p.endYear)
  const inactiveProjects = Projects.Projects.filter(p => !!p.endYear)

  return <>
    <Head/>

    <main>
      <div className="mt-12 mb-24">
        <div className="flex flex-col gap-20">
          <section>
            <MaikSectionContents/>
          </section>

          <section>
            <blockquote className="mx-5 sm:mx-8 flex flex-col gap-4 lg:gap-3 items-center">
              <div className="flex flex-col gap-2 lg:gap-1 items-center">
                <p className="text-center text-xl italic">
                  Any fool can write code <br className="md:hidden"/>
                  that a computer can understand.
                </p>

                <p className="text-center text-xl italic">
                  Good programmers write code <br className="md:hidden"/>
                  that <strong className="bold">humans</strong> can understand.
                </p>
              </div>

              <p className="dark:text-slate-400">
                &mdash; Martin Fowler
              </p>
            </blockquote>
          </section>

          <section className="dark:bg-slate-700 py-6">
            <CardsListSectionContents sectionBgColorClassName="dark:bg-slate-700" cardBgColorClassName="dark:bg-slate-600 dark:shadow-slate-800"
              icon={WeatherSunnyIcon} title="Ongoing Projects" projects={activeProjects}/>
          </section>

          <section>
            <CardsListSectionContents sectionBgColorClassName="dark:bg-slate-800"
              icon={WeatherNightIcon} title="Past Projects" projects={inactiveProjects}/>
          </section>
        </div>
      </div>
    </main>

    {
      process.env.NODE_ENV === 'development' &&
      <BreakpointReadout className="fixed right-2 top-2 opacity-80 z-50"/>
    }
  </>
}

const Head = (): JSX.Element => (
  <Helmet.Helmet>
    <html lang="en" className="dark"/>

    <title>Maik Schreiber</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo="/>
    <link rel="canonical" href="https://maik.schreiber.ms"/>

    <meta property="og:url" content="https://maik.schreiber.ms"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
    <meta property="og:description" content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."/>
    <meta property="og:image" content={'https://maik.schreiber.ms' + SocialImage.default}/>
    <meta property="og:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
    <meta name="twitter:description" content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."/>
    <meta name="twitter:image" content={'https://maik.schreiber.ms' + SocialImage.default}/>
    <meta name="twitter:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>

    <meta name="theme-color" content="#1e293b"/>

    <script src="https://www.googletagmanager.com/gtag/js?id=G-9BYMJMEBSQ" async></script>
    <script>
      {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9BYMJMEBSQ');`
      }
    </script>

    <body className="dark:bg-slate-800 font-copy dark:text-slate-200"/>
  </Helmet.Helmet>
)

const MaikSectionContents = (): JSX.Element => (
  <div className="mx-5 sm:mx-8">
    <div className="container 2xl:max-w-screen-xl mx-auto">
      <MaikCard/>
    </div>
  </div>
)

const MaikCard = (): JSX.Element => (
  <Card className="w-full xl:w-auto md:w-3/4 xl:max-w-screen-lg mx-auto flex flex-col xl:flex-row">
    <div className="xl:flex-shrink-0 relative">
      <figure>
        <picture>
          <img src={MaikImage.default} className="w-full rounded-t-xl xl:rounded-l-xl" alt="Maik"/>
        </picture>
      </figure>

      <div className="absolute w-full h-1/8 bottom-0 dark:bg-gradient-b-slate-800 xl:w-1/8 xl:h-full xl:top-0 xl:right-0 dark:xl:bg-gradient-r-slate-800"></div>
    </div>

    <div className="xl:flex-grow px-6 md:px-8 xl:py-8 flex flex-col xl:gap-5">
      <div className="py-6 md:py-8 xl:py-0 flex flex-row gap-3 items-center dark:bg-slate-700 sticky xl:static top-0 xl:top-auto">
        <HandWaveIcon className="w-8 h-8" fill="rgb(203 213 225 / var(--tw-text-opacity))" /* text-slate-300 */ />

        <h1 className="text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] dark:after:text-bzyellow">
          Hi, I&apos;m Maik
        </h1>
      </div>

      <div className="mb-6 md:mb-8 xl:mb-0 flex flex-col gap-5">
        <div>
          Born in 1978, I&apos;ve started developing software in 1994. In 2003, I started working
          for <a href="https://subshell.com" rel="noopener" className="dark:text-bzyellow">subshell GmbH</a> in
          Hamburg, Germany, where I am working on our flagship product, Sophora CMS, as well as various other
          bigger and smaller projects. I am still working for subshell to this day.
        </div>

        <p>
          I have worked with many different technologies and programming languages over the years,
          most notably Java, Go, C#, and C. As projects come and go, I use frontend/backend frameworks,
          databases, and other technologies as appropriate. I&apos;m always trying to stay on top of what&apos;s fresh.
        </p>

        <p>
          In my spare time I work on a variety of different projects which you can see below. Most of them
          are open source.
        </p>

        <p>
          I&apos;ll be happy to get in contact with you: <a href="mailto:maik@schreiber.ms" className="dark:text-bzyellow">maik@schreiber.ms</a>
        </p>
      </div>
    </div>
  </Card>
)

const CardsListSectionContents = ({ sectionBgColorClassName, cardBgColorClassName, icon, title, projects }: {
    sectionBgColorClassName: string
    cardBgColorClassName?: string
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
    title: string
    projects: Projects.Project[]
  }): JSX.Element => {

  const Icon = icon

  return (
    <div className="flex flex-col gap-8">
      <div className={classNames('py-5 flex flex-row gap-3 items-center justify-center sticky top-0 z-10', sectionBgColorClassName)}>
        <Icon className="w-8 h-8" fill="rgb(203 213 225 / var(--tw-text-opacity))" /* text-slate-300 */ />

        <h1 className="text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] dark:after:text-bzyellow">
          {title}
        </h1>
      </div>

      <div className="mx-5 sm:mx-8">
        <div className="container 2xl:max-w-screen-xl mx-auto pb-8">
          <CardsList cardBgColorClassName={cardBgColorClassName} projects={projects}/>
        </div>
      </div>
    </div>
  )
}

const CardsList = ({ cardBgColorClassName, projects }: {
    cardBgColorClassName?: string
    projects: Projects.Project[]
  }): JSX.Element => (

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
    {
      projects.map(p => <ProjectCard colorClassName={cardBgColorClassName} key={p.title} project={p}/>)
    }
  </div>
)

const ProjectCard = ({ colorClassName, project }: {
    colorClassName?: string
    project: Projects.Project
  }): JSX.Element => (

  // card widths:
  // 2xl - 395px -> 400px
  // xl  - 395px -> 400px
  // lg  - 488px -> 800px
  // md  - 360px -> 400px
  // sm  - 640px -> 800px
  // xs  - 100vw -> 800px

  <Card url={project.url} className="flex flex-col" colorClassName={colorClassName}>
    <div className={classNames('flex-shrink-0', !project.images && 'hidden md:block', project.images && 'relative')}>
      <figure>
        <picture>
          {
            project.images && <>
              <source type="image/png" srcSet={project.images.lg.default + ' 800w'}
                media={
                  // lg
                  '((min-width: 1024px) and (max-width: 1279px)) or ' +
                  // sm
                  '((min-width: 640px) and (max-width: 767px)) or ' +
                  // xs
                  '(max-width: 639px)'
                }/>

              <source type="image/png" srcSet={project.images.md.default + ' 400w'}
                media={
                  // 2xl
                  '(min-width: 1536px) or ' +
                  // xl
                  '((min-width: 1280px) and (max-width: 1535px)) or ' +
                  // md
                  '((min-width: 768px) and (max-width: 1023px))'
                }/>

              <img src={project.images.lg.default} className="w-full rounded-t-xl" alt={project.title}/>
            </>
          }

          {
            !project.images &&
            <img src={EmptyImage.default} className="w-full rounded-t-xl" alt=""/>
          }
        </picture>
      </figure>

      {
        project.images &&
        <div className="absolute w-full h-1/8 bottom-0 dark:bg-gradient-b-slate-800"></div>
      }
    </div>

    <div className="flex-grow p-6 flex flex-col gap-6">
      <div className="flex-grow flex flex-col gap-4">
        <h2 className="text-lg font-headline font-semibold">
          {project.title}
        </h2>

        <div>
          {project.description}
        </div>
      </div>

      {
        (project.technologies || project.startYear) &&
        <div className="flex flex-col gap-1">
          {
            project.technologies &&
            <div className="text-sm">
              <div className="inline text-bzyellow">
                Technologies:
              </div>{' '}

              {project.technologies.join(', ')}
            </div>
          }

          {
            project.startYear &&
            <div className="text-sm">
              <div className="inline text-bzyellow">
                Active:
              </div>{' '}

              {
                !project.endYear ? 'Since ' + project.startYear : (project.endYear > project.startYear ? project.startYear + '-' + project.endYear : project.startYear)
              }
            </div>
          }
        </div>
      }

    </div>
  </Card>
)

const Card = ({ className, colorClassName = 'dark:bg-slate-700 dark:shadow-slate-900', url, children }: {
    className?: string
    colorClassName?: string
    url?: string
    children: ReactNode
  }): JSX.Element => {

  const cssClass = classNames('shadow-xl rounded-xl', className, colorClassName)

  if (url) {
    return (
      <a href={url} rel="noopener" className={cssClass}>
        {children}
      </a>
    )
  }

  return (
    <div className={cssClass}>
      {children}
    </div>
  )
}
