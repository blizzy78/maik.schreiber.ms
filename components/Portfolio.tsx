import type { Project } from '@/api/projects'
import MaikImage from '@/images/maik.jpg'
import Image from 'next/image'

const contacts = [
  { label: 'Email', href: 'mailto:maik@schreiber.ms' },
  { label: 'GitHub', href: 'https://github.com/blizzy78' },
  { label: 'X / Twitter', href: 'https://x.com/blizzy78' },
] as const

const pageWidth = 'mx-auto w-full max-w-7xl px-4'

function ContactLinks({ compact = false, inverted = false }: { compact?: boolean; inverted?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-baseline gap-x-1 gap-y-3 text-base ${compact ? 'font-mono @xs/hero:gap-x-6' : '@xs/footer:gap-x-6'}`}
    >
      {contacts.map((contact) => (
        <a
          key={contact.href}
          className="group inline-flex items-baseline gap-2 font-semibold"
          href={contact.href}
          rel="noopener noreferrer"
        >
          {contact.label}
          <span
            className={`${inverted ? 'text-blush' : 'text-signal'} transition-transform duration-150 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none`}
            aria-hidden="true"
          >
            ↗
          </span>
        </a>
      ))}
    </div>
  )
}

function ProjectPicture({
  project,
  sizes,
  priority = false,
  archive = false,
}: {
  project: Project
  sizes: string
  priority?: boolean
  archive?: boolean
}) {
  return (
    <figure
      className={`relative m-0 min-w-0 overflow-hidden bg-picture ${archive ? 'aspect-[800/356] w-full @3xl/archive:aspect-auto @3xl/archive:h-28 @3xl/archive:w-56 @3xl/archive:shrink-0' : 'aspect-[800/356]'}`}
    >
      {project.image ? (
        <Image
          src={`/project-images/${project.image}`}
          width={800}
          height={356}
          className="size-full object-cover saturate-[.66] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:saturate-100 motion-reduce:transition-none"
          alt={`Preview of ${project.title}`}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <div
          className="blueprint-grid grid size-full place-content-center bg-placeholder text-center text-ink"
          aria-label={`No preview available for ${project.title}`}
        >
          <span className="font-mono text-3xl font-bold @3xl:text-4xl" aria-hidden="true">
            {'{…}'}
          </span>
          <small className="mt-1 font-mono text-xs uppercase">No image</small>
        </div>
      )}
    </figure>
  )
}

function formatYears(project: Project) {
  if (!project.endYear) {
    return `${project.startYear}–present`
  }

  return project.endYear === project.startYear ? `${project.startYear}` : `${project.startYear}—${project.endYear}`
}

function SectionHeading({ title, className }: { title: string; className: string }) {
  return (
    <div className="mb-10 @3xl:mb-16 @5xl:mb-20">
      <h2 className={`m-0 text-5xl font-bold leading-none tracking-tighter ${className}`}>{title}</h2>
    </div>
  )
}

function ProjectTitle({ title, className = '' }: { title: string; className?: string }) {
  return (
    <h3 className={`m-0 flex justify-between gap-4 text-2xl font-semibold leading-none tracking-tighter ${className}`}>
      {title}
      <span
        className="shrink-0 text-sm text-signal transition-transform duration-150 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none"
        aria-hidden="true"
      >
        ↗
      </span>
    </h3>
  )
}

function ProjectMeta({
  project,
  className,
  yearClassName,
  separatorClassName,
}: {
  project: Project
  className: string
  yearClassName: string
  separatorClassName?: string
}) {
  return (
    <p className={`font-mono text-sm leading-relaxed ${className}`}>
      <time className={`tabular-nums ${yearClassName}`}>{formatYears(project)}</time>
      <span className={separatorClassName} aria-hidden="true">
        {' · '}
      </span>
      {project.technologies.join(' · ')}
    </p>
  )
}

function CurrentProjectCard({ project, priority }: { project: Project; priority: boolean }) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 flex-col">
      <ProjectPicture project={project} sizes="(max-width: 767px) 100vw, 38vw" priority={priority} />
      <div className="flex flex-1 flex-col pt-6">
        <ProjectTitle title={project.title} className="@3xl/current:text-3xl @5xl/current:text-4xl" />
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">{project.description}</p>
        <ProjectMeta project={project} className="mt-auto pt-6 text-paper/60" yearClassName="text-paper/80" />
      </div>
    </a>
  )
}

function ArchiveProjectRow({ project, isLast }: { project: Project; isLast: boolean }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative mt-16 flex min-w-0 flex-col first:mt-0 @3xl/archive:mt-3 @3xl/archive:flex-row @3xl/archive:items-start @3xl/archive:gap-8 @3xl/archive:py-6 @5xl/archive:gap-12"
    >
      <span
        className="absolute left-28 top-20 z-10 hidden size-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-paper bg-blue ring-1 ring-blue @3xl/archive:block"
        aria-hidden="true"
      />
      {!isLast && (
        <span
          className="absolute -bottom-24 left-28 top-20 hidden w-px bg-steel @3xl/archive:block"
          aria-hidden="true"
        />
      )}

      <time className="mt-12 hidden w-28 shrink-0 self-start pr-4 font-mono text-sm tabular-nums leading-tight text-muted @3xl/archive:block">
        {formatYears(project)}
      </time>
      <ProjectPicture project={project} sizes="(max-width: 767px) calc(100vw - 2rem), 224px" archive />
      <div className="flex min-w-0 flex-1 flex-col pt-6 @3xl/archive:pt-0 @5xl/archive:grid @5xl/archive:grid-cols-5 @5xl/archive:items-start @5xl/archive:gap-x-12">
        <ProjectTitle
          title={project.title}
          className="@3xl/archive:text-3xl @5xl/archive:col-span-2 @5xl/archive:text-4xl"
        />
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted @5xl/archive:col-span-3 @5xl/archive:mt-0">
          {project.description}
        </p>
        <ProjectMeta
          project={project}
          className="mt-auto pt-6 text-ink/60 @5xl/archive:col-span-3 @5xl/archive:col-start-3"
          yearClassName="text-ink/80 @3xl/archive:hidden"
          separatorClassName="@3xl/archive:hidden"
        />
      </div>
    </a>
  )
}

export default function Portfolio({
  ongoingProjects,
  pastProjects,
}: {
  ongoingProjects: readonly Project[]
  pastProjects: readonly Project[]
}) {
  return (
    <main id="top">
      <a
        className="fixed left-3 top-3 z-50 -translate-y-24 bg-paper px-4 py-3 font-bold focus:translate-y-0"
        href="#current"
      >
        Skip to projects
      </a>

      <header className="sticky top-0 z-20 border-b border-ink/20 bg-fog/90 backdrop-blur @container/header">
        <div
          className={`${pageWidth} flex min-h-16 items-center justify-between gap-2 @3xl/header:min-h-20 @3xl/header:gap-8`}
        >
          <a className="inline-flex items-center" href="#top" aria-label="Maik Schreiber, back to top">
            <strong className="text-sm tracking-tight @sm/header:text-base @3xl/header:text-lg">Maik Schreiber</strong>
          </a>

          <nav
            className="flex gap-2 font-mono text-xs @sm/header:gap-3 @3xl/header:gap-6 @3xl/header:text-sm"
            aria-label="Primary navigation"
          >
            <a className="hover:underline" href="#current">
              <span className="hidden @3xl/header:inline">Current Projects</span>
              <span className="@3xl/header:hidden">Projects</span>
            </a>
            <a className="hover:underline" href="#archive">
              Archive
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="@container/hero" aria-labelledby="hero-title">
        <div
          className={`${pageWidth} grid min-h-[calc(100svh-4rem)] grid-cols-1 gap-12 py-12 @3xl/hero:min-h-[calc(100svh-5rem)] @3xl/hero:grid-cols-12 @3xl/hero:py-16 @5xl/hero:gap-24 @5xl/hero:py-24`}
        >
          <div className="self-center pb-12 @3xl/hero:col-span-7">
            <h1
              id="hero-title"
              className="my-0 mb-7 max-w-[9ch] text-6xl font-bold leading-[0.8] tracking-tighter @sm/hero:text-7xl @3xl/hero:text-8xl @6xl/hero:text-9xl"
            >
              <span className="block text-balance">I build software</span>
              <em className="mt-3 block w-max max-w-full text-balance font-display text-[.68em] font-medium leading-none text-signal">
                for the long run.
              </em>
            </h1>
            <p className="mb-5 max-w-2xl text-base leading-relaxed tracking-tight @sm/hero:text-lg @5xl/hero:text-xl">
              I&apos;m Maik, a software engineer based in Hamburg with more than 25 years of experience building backend
              systems, web applications, and developer tools. I care about clear code, pragmatic architecture, and
              maintainable systems that teams can keep working with.
            </p>
            <p className="mb-8 max-w-2xl font-mono text-sm font-semibold leading-relaxed text-blue">
              Java · Spring Boot · Spring AI · Go · PostgreSQL · React · TypeScript
            </p>
            <ContactLinks compact />
          </div>

          <div className="relative w-11/12 max-w-lg self-center justify-self-center pb-0 pl-0 pr-5 pt-5 @3xl/hero:col-span-5 @3xl/hero:w-full @3xl/hero:justify-self-end">
            <span className="absolute right-0 top-0 h-1/2 w-2/5 bg-blue" aria-hidden="true" />
            <div className="relative bg-paper">
              <Image
                src={MaikImage}
                alt="Maik Schreiber"
                className="block h-auto w-full"
                priority
                sizes="(max-width: 767px) 86vw, 38vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="current"
        className="bg-ink py-20 text-paper @container/current @3xl/current:py-28 @5xl/current:py-32"
      >
        <div className={pageWidth}>
          <SectionHeading title="Current Projects" className="@3xl/current:text-7xl @5xl/current:text-8xl" />

          <div className="grid grid-cols-1 gap-16 @3xl/current:grid-cols-2 @5xl/current:gap-24">
            {ongoingProjects.map((project, index) => (
              <CurrentProjectCard key={project.title} project={project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="bg-paper py-20 pb-28 @container/archive @3xl/archive:py-28 @3xl/archive:pb-40 @5xl/archive:py-32 @5xl/archive:pb-44"
      >
        <div className={pageWidth}>
          <SectionHeading title="Project Archive" className="@3xl/archive:text-7xl @5xl/archive:text-8xl" />

          <div>
            {pastProjects.map((project, index) => (
              <ArchiveProjectRow key={project.title} project={project} isLast={index === pastProjects.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-blue py-16 text-paper @container/footer @3xl/footer:py-24">
        <div className={`${pageWidth} grid gap-12 @5xl/footer:grid-cols-5 @5xl/footer:gap-24`}>
          <div className="@5xl/footer:col-span-3">
            <h2 className="m-0 text-5xl font-bold leading-none tracking-tighter @sm/footer:text-balance @3xl/footer:text-6xl @5xl/footer:text-7xl @6xl/footer:text-8xl">
              Software built to stay useful.
            </h2>
          </div>
          <div className="self-end @5xl/footer:col-span-2">
            <p className="mb-8 max-w-lg leading-relaxed text-paper/75">
              I&apos;m always happy to talk about software development, open source, and maintainable systems.
            </p>
            <div className="mb-8">
              <ContactLinks inverted />
            </div>
            <a className="font-mono text-xs underline underline-offset-4" href="/maik-schreiber.pub.asc">
              GPG public key
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
