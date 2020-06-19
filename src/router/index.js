// route components
import Home from 'components/content/home/Home.svelte';
import About from 'components/content/about/About.svelte';
import Resume from 'components/content/resume/Resume.svelte';

export default {
  '/': Home,
  '/about': About,
  '/resume': Resume,
  '*': Home,
};
