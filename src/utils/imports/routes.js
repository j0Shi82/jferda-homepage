import { applyCodeSplittingToRoute } from 'utils/imports/core';

// route components, loaded async thanks to svelte-spa-chunk
const HomeRoute = applyCodeSplittingToRoute(() => import('components/content/home/Home.svelte'));
const AboutRoute = applyCodeSplittingToRoute(() => import('components/content/about/About.svelte'));
const ResumeRoute = applyCodeSplittingToRoute(() => import('components/content/resume/Resume.svelte'));
const SkillsRoute = applyCodeSplittingToRoute(() => import('components/content/skills/Skills.svelte'));

export {
  HomeRoute, AboutRoute, ResumeRoute, SkillsRoute,
};
