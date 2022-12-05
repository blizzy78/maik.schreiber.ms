import '@fontsource/arvo'
import '@fontsource/lato'
import classNames from 'classnames'
import { ReactNode } from 'react'
import * as Helmet from 'react-helmet-async'
import { BreakpointReadout } from './BreakpointReadout'
import { ReactComponent as EMailIcon } from './icons/email-outline.svg'
import { ReactComponent as GitHubIcon } from './icons/github.svg'
import { ReactComponent as HandWaveIcon } from './icons/hand-wave-outline.svg'
import { ReactComponent as TwitterIcon } from './icons/twitter.svg'
import { ReactComponent as WeatherNightIcon } from './icons/weather-night.svg'
import { ReactComponent as WeatherSunnyIcon } from './icons/weather-sunny.svg'
import * as MaikAVIFImage from './maik.avif'
import * as MaikJPEGImage from './maik.jpg'
import * as MaikWebPImage from './maik.webp'
import * as EmptyImage from './projects/img/empty.png'
import * as Projects from './projects/projects'
import * as SocialImage from './social.png'

export const App = () => (
  <Providers>
    <Head/>

    <AppContents/>
  </Providers>
)

const Providers = ({ children }: { children: ReactNode }) => (
  <Helmet.HelmetProvider>
    {children}
  </Helmet.HelmetProvider>
)

const AppContents = () => {
  const activeProjects = Projects.projects.filter(p => !p.endYear)
  const inactiveProjects = Projects.projects.filter(p => !!p.endYear)

  return <>
    <main>
      <div className="mt-12 mb-24">
        <div className="flex flex-col gap-20">
          <section>
            <MaikSectionContents/>
          </section>

          <section>
            <QuoteSectionContents/>
          </section>

          <section className="dark:bg-slate-700 py-6">
            <ProjectCardsListSectionContents sectionBgColorClassName="dark:bg-slate-700"
              cardColorClassName="dark:border-slate-500 dark:bg-slate-600 dark:shadow-slate-800"
              cardHoverColorClassName="hover:dark:border-slate-400 transition-[border] duration-200"
              titleIcon={WeatherSunnyIcon} title="Ongoing Projects" projects={activeProjects}/>
          </section>

          <section>
            <ProjectCardsListSectionContents sectionBgColorClassName="dark:bg-slate-800"
              titleIcon={WeatherNightIcon} title="Past Projects" projects={inactiveProjects}/>
          </section>
        </div>
      </div>
    </main>

    {
      import.meta.env.DEV &&
      <BreakpointReadout className="fixed right-2 top-2 opacity-80 z-50"/>
    }
  </>
}

const Head = () => (
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

const MaikSectionContents = () => (
  <div className="mx-5 sm:mx-8">
    <div className="container 2xl:max-w-screen-xl mx-auto">
      <MaikCard/>
    </div>
  </div>
)

const MaikCard = () => (
  <Card className="w-full xl:w-auto md:w-3/4 xl:max-w-screen-lg mx-auto flex flex-col xl:grid xl:grid-cols-2">
    <div className="relative">
      <figure className="w-full xl:h-full">
        <picture className="w-full">
          <source type="image/avif" srcSet={MaikAVIFImage.default}/>
          <source type="image/webp" srcSet={MaikWebPImage.default}/>
          <source type="image/jpeg" srcSet={MaikJPEGImage.default}/>

          <img src={MaikJPEGImage.default} className="w-full xl:h-full xl:object-cover rounded-t-xl xl:rounded-l-xl" alt="Maik"/>
        </picture>
      </figure>

      <div className="absolute w-full h-1/8 bottom-0 dark:bg-gradient-b-slate-800 xl:w-1/8 xl:h-full xl:top-0 xl:right-0 dark:xl:bg-gradient-r-slate-800"></div>
    </div>

    <div className="px-6 md:px-8 xl:py-8 flex flex-col xl:gap-5">
      <div className="py-6 md:py-8 xl:py-0 flex flex-row gap-3 items-center dark:bg-slate-700 sticky xl:static top-0 xl:top-auto">
        <H1 titleIcon={HandWaveIcon} title="Hi, I'm Maik"/>
      </div>

      <div className="mb-6 md:mb-8 xl:mb-0 flex flex-col gap-5">
        <div>
          Born in 1978, I&apos;ve started developing software in 1994. In 2003, I started working
          for <a href="https://subshell.com" rel="noopener noreferrer" className="dark:text-bzyellow">subshell GmbH</a> in
          Hamburg, Germany, where I am working on our flagship product, Sophora CMS, as well as various other
          bigger and smaller projects. I am still working for subshell to this day.
        </div>

        <div>
          I have worked with many different technologies and programming languages over the years,
          most notably Java, Go, React, C#, and C. As projects come and go, I use frontend/<wbr/>backend frameworks,
          databases, and other technologies as appropriate. I&apos;m always trying to stay on top of what&apos;s fresh.
        </div>

        <div>
          In my spare time I work on a variety of different projects which you can see below. Most of them
          are open source.
        </div>

        <div>
          I&apos;ll be happy to get in contact with you:
        </div>

        <div className="flex flex-col sm:flex-row gap-1 sm:gap-6">
          <a href="mailto:maik@schreiber.ms" className="flex flex-row gap-2 items-center">
            <EMailIcon className="w-5 h-5 dark:fill-bzyellow items-center"/>
            <div className="inline-block dark:text-bzyellow">
              maik@schreiber.ms
            </div>
          </a>

          <a href="https://github.com/blizzy78" rel="noopener noreferer" className="flex flex-row gap-2 items-center">
            <GitHubIcon className="w-5 h-5 dark:fill-bzyellow items-center"/>
            <div className="inline-block dark:text-bzyellow">
              @blizzy78
            </div>
          </a>

          <a href="https://twitter.com/blizzy78" rel="noopener noreferer" className="flex flex-row gap-2 items-center">
            <TwitterIcon className="w-5 h-5 dark:fill-bzyellow items-center"/>
            <div className="inline-block dark:text-bzyellow">
              @blizzy78
            </div>
          </a>
        </div>
      </div>
    </div>
  </Card>
)

const QuoteSectionContents = () => (
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
)

const ProjectCardsListSectionContents = ({ sectionBgColorClassName, cardColorClassName, cardHoverColorClassName, titleIcon, title, projects }: {
    sectionBgColorClassName: string
    cardColorClassName?: string
    cardHoverColorClassName?: string
    titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
    title: string
    projects: Projects.Project[]
  }) => (

  <div className="flex flex-col gap-8">
    <div className={classNames('py-5 flex flex-row justify-center sticky top-0 z-20', sectionBgColorClassName)}>
      <H2 titleIcon={titleIcon} title={title}/>
    </div>

    <div className="mx-5 sm:mx-8">
      <div className="container 2xl:max-w-screen-xl mx-auto pb-8">
        <ProjectCardsList cardColorClassName={cardColorClassName} cardHoverColorClassName={cardHoverColorClassName} projects={projects}/>
      </div>
    </div>
  </div>
)

const ProjectCardsList = ({ cardColorClassName, cardHoverColorClassName, projects }: {
    cardColorClassName?: string
    cardHoverColorClassName?: string
    projects: Projects.Project[]
  }) => (

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
    {
      projects.map(p => <ProjectCard colorClassName={cardColorClassName} hoverColorClassName={cardHoverColorClassName} key={p.title} project={p}/>)
    }
  </div>
)

const ProjectCard = ({ colorClassName, hoverColorClassName, project }: {
    colorClassName?: string
    hoverColorClassName?: string
    project: Projects.Project
  }) => {

  // card widths:
  // 2xl - 395px -> 400px image
  // xl  - 395px -> 400px image
  // lg  - 488px -> 800px image
  // md  - 360px -> 400px image
  // sm  - 640px -> 800px image
  // xs  - 100vw -> 800px image

  const onMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { currentTarget } = e

    const rect = currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    currentTarget.style.setProperty('--x', `${x.toFixed(0)}px`)
    currentTarget.style.setProperty('--y', `${y.toFixed(0)}px`)
  }

  const onMouseEnter = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { currentTarget } = e

    currentTarget.style.setProperty('--opacity', '1')
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { currentTarget } = e

    currentTarget.style.setProperty('--opacity', '0')
  }

  const image800MediaSelector =
    // lg
    '((min-width: 1024px) and (max-width: 1279px)) or ' +
    // sm
    '((min-width: 640px) and (max-width: 767px)) or ' +
    // xs
    '(max-width: 639px)'

  const image400MediaSelector =
    // 2xl
    '(min-width: 1536px) or ' +
    // xl
    '((min-width: 1280px) and (max-width: 1535px)) or ' +
    // md
    '((min-width: 768px) and (max-width: 1023px))'

  return (
    <Card url={project.url}
      className="relative flex flex-col
        before:absolute before:w-full before:h-full before:left-0 before:top-0 before:opacity-[var(--opacity)]
        before:rounded-[inherit] before:bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),_#ffffff18,_transparent_40%)]
        before:transition-opacity before:duration-200
        before:content-[''] before:z-10"
      colorClassName={colorClassName} hoverColorClassName={hoverColorClassName}
      onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      <div className={classNames('flex-shrink-0', !project.images && 'hidden md:block', project.images && 'relative')}>
        <figure>
          <picture>
            {
              project.images && <>
                <source type="image/avif" srcSet={project.images.avif.lg.default + ' 800w'} media={image800MediaSelector}/>
                <source type="image/avif" srcSet={project.images.avif.md.default + ' 400w'} media={image400MediaSelector}/>
                <source type="image/webp" srcSet={project.images.webp.lg.default + ' 800w'} media={image800MediaSelector}/>
                <source type="image/webp" srcSet={project.images.webp.md.default + ' 400w'} media={image400MediaSelector}/>
                <source type="image/png" srcSet={project.images.png.lg.default + ' 800w'} media={image800MediaSelector}/>
                <source type="image/png" srcSet={project.images.png.md.default + ' 400w'} media={image400MediaSelector}/>

                <img src={project.images.png.lg.default} className="w-full rounded-t-xl" alt={project.title}/>
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

        <div className="flex flex-col gap-1">
          <div className="text-sm">
            <div className="inline text-bzyellow">
              Technologies:
            </div>{' '}

            {project.technologies.join(', ')}
          </div>

          <div className="text-sm">
            <div className="inline text-bzyellow">
              Active:
            </div>{' '}

            {
              !!project.endYear ? (
                project.endYear > project.startYear ? <>
                  {project.startYear}&ndash;{project.endYear}
                </> :
                project.startYear
              ) :
              'Since ' + project.startYear
            }
          </div>
        </div>
      </div>
    </Card>
  )
}

const Card = ({
    className,
    colorClassName = 'dark:border-slate-600 dark:bg-slate-700 dark:shadow-slate-900',
    hoverColorClassName = 'hover:dark:border-slate-500 transition-[border] duration-200',
    url,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    children
  }: {
    className?: string
    colorClassName?: string
    hoverColorClassName?: string
    url?: string
    onMouseMove?: React.MouseEventHandler<HTMLElement>
    onMouseEnter?: React.MouseEventHandler<HTMLElement>
    onMouseLeave?: React.MouseEventHandler<HTMLElement>
    children: ReactNode
  }) => {

  const cssClass = classNames(
    'border rounded-xl shadow-xl',
    className,
    colorClassName,
    (!!onMouseMove && !!onMouseEnter && !!onMouseLeave) && hoverColorClassName
  )

  if (!!url && !!onMouseMove && !!onMouseEnter && !!onMouseLeave) {
    return (
      <a href={url} rel="noopener noreferrer" className={cssClass} onMouseMove={onMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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

const H1 = ({ titleIcon, title }: {
    titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
    title: string
  }) => {

  const TitleIcon = titleIcon

  return (
    <h1 className="flex flex-row items-center gap-3">
      <TitleIcon className="inline-block w-8 h-8 fill-slate-300"/>

      <div className="inline-block text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] dark:after:text-bzyellow">
        {title}
      </div>
    </h1>
  )
}

const H2 = ({ titleIcon, title }: {
    titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>
    title: string
  }) => {

  const TitleIcon = titleIcon

  return (
    <h2 className="flex flex-row items-center gap-3">
      <TitleIcon className="inline-block w-8 h-8 fill-slate-300" aria-hidden/>

      <div className="inline-block text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] dark:after:text-bzyellow">
        {title}
      </div>
    </h2>
  )
}
