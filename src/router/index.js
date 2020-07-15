import { routeWrapper, getLocalizedRoute, getRouteGuards } from 'utils/imports/core';
import { localeStandardLanguage, localeSupportedLanguages } from 'utils/imports/config';
import baseRoutes from 'router/baseRoutes';

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
