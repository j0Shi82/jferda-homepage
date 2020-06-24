// route components
import Home from 'components/content/home/Home.svelte';
import About from 'components/content/about/About.svelte';
import Resume from 'components/content/resume/Resume.svelte';
import Skills from 'components/content/skills/Skills.svelte';

export default {
  '/': Home,
  '/about': About,
  '/resume': Resume,
  '/skills': Skills,
  '*': Home,
};
