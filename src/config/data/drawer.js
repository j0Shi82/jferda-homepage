import projectList from 'config/data/projects.js'
import { menuAboutIcon, menuHomeIcon, menuProjectsIcon, menuResumeIcon, menuSkillsIcon } from 'utils/imports/config.js'

const generalMenuItems = [
  { routeName: 'home', icon: menuHomeIcon },
  { routeName: 'about', icon: menuAboutIcon },
  { routeName: 'resume', icon: menuResumeIcon },
  { routeName: 'skills', icon: menuSkillsIcon },
  { routeName: 'projects', icon: menuProjectsIcon },
]

const projectMenuItems = projectList
  .filter(project => project.featured)
  .map(project => ({
    routeName: project.routeName,
    localeIdent: project.ident,
  }))

export { generalMenuItems, projectMenuItems }
