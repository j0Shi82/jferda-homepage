import { generalMenuItems, projectMenuItems } from 'config/data/drawer';
import aboutPhilosophies from 'config/data/about';
import { cats, skills } from 'config/data/skills';
import { education, experience, skills as resumeSkills } from 'config/data/resume';
import projectList from 'config/data/projects';
import { menuItems, knowledgeLogoItems } from 'config/data/home';
import routeLocales from 'locale/dict/routes';

export {
  generalMenuItems as drawerMenuItems,
  projectMenuItems as drawerMenuProjectItems,
  aboutPhilosophies,
  routeLocales as routeLocaleDict,
  cats as skillCategories,
  skills as skillList,
  projectList,
  menuItems as homeRoutes,
  knowledgeLogoItems as homeKnowledgeLogoItems,
  education as resumeEducationList,
  experience as resumeExperienceList,
  resumeSkills as resumeSkillList,
};
