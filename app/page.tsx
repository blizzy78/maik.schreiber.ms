import BreakpointReadout from '@/components/BreakpointReadout'
import MaikSectionContents from '@/components/MaikSectionContents'
import ProjectCardsListSectionContents from '@/components/ProjectCardsListSectionContents'
import QuoteSectionContents from '@/components/QuoteSectionContents'
import WeatherNightIcon from '@/images/weather-night.svg'
import WeatherSunnyIcon from '@/images/weather-sunny.svg'
import { activeProjects, inactiveProjects } from '@/projects/projects'

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

      {process.env.NODE_ENV !== 'production' && (
        <div className="isolate">
          {/* <div className="fixed top-5 right-5 rounded-lg bg-white p-5 shadow-md dark:bg-slate-700">
            <Outline />
          </div> */}

          <BreakpointReadout className="fixed right-2 top-2 opacity-80" />
        </div>
      )}
    </>
  )
}
