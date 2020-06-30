import { routeWrapper, getLocalizedRoute, getRouteGuards } from 'utils/imports/core';
import { localeStandardLanguage, localeSupportedLanguages } from 'utils/imports/config';
import {
  HomeRoute, AboutRoute, ResumeRoute, SkillsRoute,
} from 'utils/imports/routes';

const baseRoutes = [
  { name: 'home', component: HomeRoute },
  { name: 'about', component: AboutRoute },
  { name: 'resume', component: ResumeRoute },
  { name: 'skills', component: SkillsRoute },
  { name: '404', component: HomeRoute },
];

const routes = {};

// add routes with lang param
localeSupportedLanguages.filter((lang) => lang !== localeStandardLanguage).forEach((lang) => {
  Object.assign(routes, baseRoutes.reduce((prev, cur) => {
    prev[getLocalizedRoute(cur.name, lang)] = routeWrapper(
      cur.component,
      { lang, routeName: cur.name },
      ...getRouteGuards(cur.name),
    );
    return prev;
  }, {}));
});

Object.assign(routes, baseRoutes.reduce((prev, cur) => {
  prev[getLocalizedRoute(cur.name, localeStandardLanguage)] = routeWrapper(
    cur.component,
    { lang: localeStandardLanguage, routeName: cur.name },
    ...getRouteGuards(cur.name),
  );
  return prev;
}, {}));

export default routes;
