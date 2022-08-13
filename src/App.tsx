import React, { ReactNode } from 'react'
import * as Helmet from 'react-helmet'
import { BreakpointReadout } from './BreakpointReadout'
import * as Projects from './projects/projects'
import classNames from 'classnames'
import '@fontsource/arvo'
import '@fontsource/lato'
import * as MaikImage from './maik.jpg'
import * as SocialImage from './social.png'
import * as EmptyImage from './projects/empty.png'

export const App = (): JSX.Element => {
  const activeProjects = Projects.Projects.filter(p => !p.endYear)
  const inactiveProjects = Projects.Projects.filter(p => !!p.endYear)

  return <>
    <Head/>

    <main>
      <div className="mx-5 sm:mx-8 mt-12 mb-24">
        <div className="container 2xl:max-w-screen-xl mx-auto flex flex-col gap-20">
          <section>
            <MaikCard/>
          </section>

          <section>
            <CardsList title="Ongoing Projects" projects={activeProjects}/>
          </section>

          <section>
            <CardsList title="Past Projects" projects={inactiveProjects}/>
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

    <link rel="preload" href="/static/media/lato-latin-400-normal.be36596da218e1eec01c.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
    <link rel="preload" href="/static/media/arvo-latin-400-normal.eee79ea9c90aeaf1efe6.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>

    <title>Maik Schreiber</title>
    <link rel="icon" href="data:;base64,iVBORw0KGgo="/>

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

    <div className="xl:flex-grow p-6 md:p-8 flex flex-col gap-5">
      <h1 className="text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] after:text-bzyellow">
        Hi, I&apos;m Maik
      </h1>

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
  </Card>
)

const CardsList = ({ title, projects }: {
    title: string
    projects: Projects.Project[]
  }): JSX.Element => (

  <div className="flex flex-col gap-12">
    <h1 className="self-center text-2xl font-headline font-semibold after:content-['.'] after:ml-[0.125rem] dark:after:text-bzyellow">
      {title}
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {
        projects.map(p => <ProjectCard key={p.title} project={p}/>)
      }
    </div>
  </div>
)

const ProjectCard = ({ project }: { project: Projects.Project }): JSX.Element => (
  <Card url={project.url} className="flex flex-col">
    <div className={classNames('flex-shrink-0', !project.image && 'hidden md:block', project.image && 'relative')}>
      <figure>
        <picture>
          <img src={project.image ? project.image.default : EmptyImage.default} className="w-full rounded-t-xl" alt={project.image ? project.title : ''}/>
        </picture>
      </figure>

      {
        project.image &&
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

const Card = ({ className, url, children }: {
    className?: string
    url?: string
    children: ReactNode
  }): JSX.Element => {

  const cssClass = classNames('dark:bg-slate-700 shadow-xl dark:shadow-slate-900 rounded-xl', className)

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
