import { wrap } from 'svelte-spa-router';

// route components
import Home from 'components/content/home/Home.svelte';
import About from 'components/content/about/About.svelte';
import Resume from 'components/content/resume/Resume.svelte';
import Skills from 'components/content/skills/Skills.svelte';

// guards
import setIsLoadingTrue from 'router/guards/setIsLoadingTrue';

export default {
  '/': wrap(Home, setIsLoadingTrue),
  '/about': wrap(About, setIsLoadingTrue),
  '/resume': wrap(Resume, setIsLoadingTrue),
  '/skills': wrap(Skills, setIsLoadingTrue),
  '*': wrap(Home, setIsLoadingTrue),
};
