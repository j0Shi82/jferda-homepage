import projectList from 'config/data/projects.js'
import { menuAboutIcon, menuHomeIcon, menuResumeIcon, menuSkillsIcon } from 'utils/imports/config.js'

const generalMenuItems = [
  { routeName: 'home', icon: menuHomeIcon },
  { routeName: 'about', icon: menuAboutIcon },
  { routeName: 'resume', icon: menuResumeIcon },
  { routeName: 'skills', icon: menuSkillsIcon },
]

const projectMenuItems = projectList
  .filter(project => project.live)
  .map(project => ({
    routeName: project.routeName,
    localeIdent: project.ident,
  }))

export { generalMenuItems, projectMenuItems }
