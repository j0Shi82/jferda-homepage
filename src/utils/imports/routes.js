import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

const applyCodeSplittingToRoute = ChunkGenerator(ChunkComponent);

// route components, loaded async thanks to svelte-spa-chunk
const HomeRoute = applyCodeSplittingToRoute(() => import('components/content/home/Home.svelte'));
const AboutRoute = applyCodeSplittingToRoute(() => import('components/content/about/About.svelte'));
const ResumeRoute = applyCodeSplittingToRoute(() => import('components/content/resume/Resume.svelte'));
const SkillsRoute = applyCodeSplittingToRoute(() => import('components/content/skills/Skills.svelte'));
const ProjectsRoute = applyCodeSplittingToRoute(() => import('components/content/projects/Projects.svelte'));
const ProjectRoute = applyCodeSplittingToRoute(() => import('components/content/projects/Project.svelte'));

export {
  HomeRoute, AboutRoute, ResumeRoute, SkillsRoute, ProjectsRoute, ProjectRoute,
};
