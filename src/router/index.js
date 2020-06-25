import { wrap } from 'svelte-spa-router';
import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';
import routeLocales from 'locale/dict/routes';
import config from 'config/index';
import getGuards from 'router/utils/getGuards';

const Chunk = ChunkGenerator(ChunkComponent);

// route components, loaded async thanks to svelte-spa-chunk
const Home = Chunk(() => import('components/content/home/Home.svelte'));
const About = Chunk(() => import('components/content/about/About.svelte'));
const Resume = Chunk(() => import('components/content/resume/Resume.svelte'));
const Skills = Chunk(() => import('components/content/skills/Skills.svelte'));

const baseRoutes = [
  { name: 'home', component: Home },
  { name: 'about', component: About },
  { name: 'resume', component: Resume },
  { name: 'skills', component: Skills },
  { name: '404', component: Home },
];

const routes = {};

// add routes with lang param
config.app.locale.supportedLanguages.filter((lang) => lang !== config.app.locale.standardLanguage).forEach((lang) => {
  Object.assign(routes, baseRoutes.reduce((prev, cur) => {
    const localizedRoute = `/${lang}${routeLocales[lang][cur.name]}`;
    prev[localizedRoute] = wrap(
      cur.component,
      { lang, routeName: cur.name },
      ...getGuards(cur.name),
    );
    return prev;
  }, {}));
});

// add standard routes without lang param
Object.assign(routes, baseRoutes.reduce((prev, cur) => {
  const localizedRoute = routeLocales[config.app.locale.standardLanguage][cur.name];
  prev[localizedRoute] = wrap(
    cur.component,
    { lang: config.app.locale.standardLanguage, routeName: cur.name },
    ...getGuards(cur.name),
  );
  return prev;
}, {}));

console.log(routes);

export default routes;
