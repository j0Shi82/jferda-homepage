import {
  HomeRoute, AboutRoute, ResumeRoute, SkillsRoute, ProjectsRoute, ProjectRoute,
} from 'utils/imports/routes';

const baseRoutes = [
  { name: 'home', component: HomeRoute, data: {} },
  { name: 'about', component: AboutRoute, data: {} },
  { name: 'resume', component: ResumeRoute, data: {} },
  { name: 'skills', component: SkillsRoute, data: {} },
  { name: 'projects', component: ProjectsRoute, data: {} },
  { name: 'projects_nwoun', component: ProjectRoute, data: { projectIdent: 'nwoun' } },
  { name: 'projects_edom', component: ProjectRoute, data: { projectIdent: 'edom' } },
  { name: '404', component: HomeRoute, data: {} },
];

export default baseRoutes;
