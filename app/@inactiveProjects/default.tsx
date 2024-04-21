import { getProjects } from '@/api/server/projects'
import ProjectCardsListSectionContents from '@/components/ProjectCardsListSectionContents'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

export default async function Page() {
  const projects = await getProjects()
  const inactiveProjects = projects.filter((p) => !!p.endYear)

  return (
    <ProjectCardsListSectionContents
      sectionBgColorClassName="dark:bg-slate-800"
      cardHoverColorClassName="transition-[border,_box-shadow,_transform] duration-75 hover:z-10 hover:scale-105 hover:shadow-lg hover:duration-100 hover:dark:border-slate-500"
      titleIcon={faMoon}
      title="Past Projects"
      projects={inactiveProjects}
    />
  )
}
