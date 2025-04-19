import aboutPhilosophies from 'config/data/about.js'
import { generalMenuItems, projectMenuItems } from 'config/data/drawer.js'
import { knowledgeLogoItems, menuItems } from 'config/data/home.js'
import projectList from 'config/data/projects.js'
import { education, experience, skills as resumeSkills } from 'config/data/resume.js'
import { cats, skills } from 'config/data/skills.js'
import routeLocales from 'locale/dict/routes.js'

export {
  aboutPhilosophies,
  generalMenuItems as drawerMenuItems,
  projectMenuItems as drawerMenuProjectItems,
  knowledgeLogoItems as homeKnowledgeLogoItems,
  menuItems as homeRoutes,
  projectList,
  education as resumeEducationList,
  experience as resumeExperienceList,
  resumeSkills as resumeSkillList,
  routeLocales as routeLocaleDict,
  cats as skillCategories,
  skills as skillList,
}
