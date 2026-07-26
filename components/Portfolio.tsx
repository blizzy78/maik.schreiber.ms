import type { Project } from '@/api/projects'
import MaikImage from '@/images/maik.jpg'
import Image from 'next/image'

const contacts = [
  { label: 'Email', href: 'mailto:maik@schreiber.ms' },
  { label: 'GitHub', href: 'https://github.com/blizzy78' },
  { label: 'X/Twitter', href: 'https://x.com/blizzy78' },
] as const

function ContactLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium sm:text-base xl:flex-nowrap">
      {contacts.map((contact) => (
        <a
          key={contact.href}
          className="portfolio-link whitespace-nowrap"
          href={contact.href}
          rel="noopener noreferrer"
        >
          {contact.label}
        </a>
      ))}
    </div>
  )
}

function ProjectPicture({
  project,
  className = '',
  sizes,
  priority = false,
}: {
  project: Project
  className?: string
  sizes: string
  priority?: boolean
}) {
  return (
    <figure className={`portfolio-media relative min-w-0 overflow-hidden ${className}`}>
      {project.image ? (
        <Image
          src={`/project-images/${project.image}`}
          width={800}
          height={356}
          className="size-full object-cover"
          alt={`${project.title} project screenshot`}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div className="grid size-full min-h-36 place-items-center bg-[var(--surface-strong)] px-5 text-center">
          <div>
            <div className="portfolio-display text-3xl font-semibold">{project.title}</div>
            <div className="mt-2 text-xs">Screenshot unavailable</div>
          </div>
        </div>
      )}
    </figure>
  )
}

function formatYears(project: Project) {
  if (!project.endYear) {
    return <>{project.startYear}&ndash;present</>
  }

  return project.endYear === project.startYear ? `${project.startYear}` : `${project.startYear}—${project.endYear}`
}

export default function Portfolio({
  ongoingProjects,
  pastProjects,
}: {
  ongoingProjects: readonly Project[]
  pastProjects: readonly Project[]
}) {
  return (
    <main className="portfolio-shell pb-32">
      <div id="top" className="mx-auto flex max-w-7xl flex-col gap-20 px-5 sm:px-8">
        <section className="grid min-w-0 gap-8 pt-12 md:grid-cols-12 md:gap-10 md:pt-20">
          <figure className="relative min-w-0 md:col-span-5 lg:col-span-4">
            <Image
              src={MaikImage}
              alt="Maik Schreiber"
              className="aspect-[4/5] size-full object-cover object-top"
              priority
              sizes="(max-width: 767px) 100vw, 38vw"
            />
          </figure>

          <div className="flex min-w-0 flex-col md:col-span-7 lg:col-span-8">
            <div>
              <h1 className="portfolio-display mb-5 text-5xl font-semibold leading-[0.98] tracking-[-0.04em]">
                Maik Schreiber
              </h1>

              <h2 className="portfolio-display mb-4 text-3xl font-medium leading-[0.98] tracking-[-0.04em]">
                Building software meant to last
              </h2>

              <div className="max-w-3xl space-y-4 text-pretty text-[15px] leading-7 sm:text-base">
                <p>
                  I am a software engineer based in Hamburg, Germany, with more than 25 years of professional
                  experience.
                </p>

                <p>
                  My work spans backend systems, web applications, and developer tooling, primarily using Java,
                  Spring&nbsp;Boot, Spring&nbsp;AI, Go, PostgreSQL, React, and TypeScript. I also use AI coding agents
                  as part of my day-to-day development workflow. I value clear code, pragmatic architecture, and systems
                  that remain maintainable as products and teams evolve.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="portfolio-display mb-4 text-3xl font-medium leading-[0.98] tracking-[-0.04em]">
                Let&apos;s talk
              </h2>

              <p className="mb-3">
                I&apos;m always happy to connect with people interested in software development, open source, and
                maintainable systems.
              </p>
              <ContactLinks />
              <a
                className="portfolio-link decoration-current/30 mt-4 inline-block whitespace-nowrap text-xs underline"
                href="/maik-schreiber.pub.asc"
              >
                GPG public key
              </a>
            </div>
          </div>
        </section>

        <blockquote className="bg-[var(--surface-strong)] px-5 py-9 sm:px-8 sm:py-10 lg:p-12">
          <p className="portfolio-display mx-auto max-w-5xl text-center text-3xl font-medium leading-tight">
            &quot;Any fool can write code that a computer can understand.
            <br />
            Good programmers write code that <strong>humans</strong> can understand.&quot;
          </p>
          <footer className="mt-3 text-center text-[15px] sm:text-base">Martin Fowler</footer>
        </blockquote>

        <section id="ongoing" className="scroll-mt-8">
          <div className="mb-9 border-b border-[var(--line)] pb-5">
            <h2 className="portfolio-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Ongoing Projects
            </h2>
          </div>
          <div className="space-y-8">
            {ongoingProjects.map((project, index) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project grid min-w-0 gap-6 md:grid-cols-12 md:gap-10"
              >
                <ProjectPicture
                  project={project}
                  className="aspect-[800/356] md:col-span-5"
                  sizes="(max-width: 767px) 100vw, 42vw"
                  priority={index === 0}
                />
                <div className="flex min-w-0 flex-col md:col-span-7">
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <h3 className="portfolio-display text-3xl font-semibold -tracking-wide">{project.title}</h3>
                    <span className="shrink-0 text-xs text-[var(--accent)]">{formatYears(project)}</span>
                  </div>
                  <p className="max-w-2xl leading-7">{project.description}</p>
                  <dl className="mt-auto pt-7 text-sm">
                    <div>
                      <dt className="mb-1 text-xs text-[var(--accent)]">Technologies</dt>
                      <dd>{project.technologies.join(', ')}</dd>
                    </div>
                  </dl>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="past" className="scroll-mt-8">
          <div className="mb-9 border-b border-[var(--line)] pb-5">
            <h2 className="portfolio-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">Past Projects</h2>
          </div>
          <div className="grid min-w-0 gap-x-8 gap-y-12 md:grid-cols-2">
            {pastProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project grid min-w-0 grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-5"
              >
                <ProjectPicture project={project} className="aspect-[4/3]" sizes="(max-width: 767px) 40vw, 18vw" />
                <div className="flex min-w-0 flex-col">
                  <h3 className="portfolio-display text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6">{project.description}</p>
                  <div className="mt-auto pt-4">
                    <p className="text-xs text-[var(--accent)]">{formatYears(project)}</p>
                    <p className="mt-1 text-xs">{project.technologies.join(', ')}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
