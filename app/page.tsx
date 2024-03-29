import MaikSectionContents from '@/components/MaikSectionContents'
import ProjectCardsListSectionContents from '@/components/ProjectCardsListSectionContents'
import QuoteSectionContents from '@/components/QuoteSectionContents'
import { activeProjects, inactiveProjects } from '@/projects/projects'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
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
                titleIcon={faSun}
                title="Ongoing Projects"
                projects={activeProjects}
              />
            </section>

            <section>
              <ProjectCardsListSectionContents
                sectionBgColorClassName="dark:bg-slate-800"
                cardHoverColorClassName="transition-[border,_box-shadow,_transform] duration-75 hover:z-10 hover:scale-105 hover:shadow-lg hover:duration-100 hover:dark:border-slate-500"
                titleIcon={faMoon}
                title="Past Projects"
                projects={inactiveProjects}
              />
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
