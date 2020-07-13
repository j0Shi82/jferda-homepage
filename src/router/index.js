import { routeWrapper, getLocalizedRoute, getRouteGuards } from 'utils/imports/core';
import { localeStandardLanguage, localeSupportedLanguages } from 'utils/imports/config';
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
  { name: 'projects_mmb', component: ProjectRoute, data: { projectIdent: 'mmb' } },
  { name: '404', component: HomeRoute, data: {} },
];

const routes = {};

// add routes with lang param
localeSupportedLanguages.filter((lang) => lang !== localeStandardLanguage).forEach((lang) => {
  Object.assign(routes, baseRoutes.reduce((prev, cur) => {
    prev[getLocalizedRoute(cur.name, lang)] = routeWrapper(
      cur.component,
      { lang, routeName: cur.name, ...cur.data },
      ...getRouteGuards(cur.name),
    );
    return prev;
  }, {}));
});

Object.assign(routes, baseRoutes.reduce((prev, cur) => {
  prev[getLocalizedRoute(cur.name, localeStandardLanguage)] = routeWrapper(
    cur.component,
    { lang: localeStandardLanguage, routeName: cur.name, ...cur.data },
    ...getRouteGuards(cur.name),
  );
  return prev;
}, {}));

export default routes;
