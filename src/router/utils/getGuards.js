// guards
import setIsLoadingTrue from 'router/guards/setIsLoadingTrue';
import setLocale from 'router/guards/setLocale';
import setProjectIdent from 'router/guards/setProjectIdent';

const guardConfig = [
  { test: () => true, guards: [setLocale, setIsLoadingTrue] },
  { test: (routeName) => routeName.match(/^projects_/), guards: [setProjectIdent] },
];

export default (routeName) => {
  const guards = [];
  guardConfig.forEach((config) => {
    if (config.test(routeName)) guards.push(...config.guards);
  });
  return guards;
};
