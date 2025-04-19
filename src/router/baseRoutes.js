const baseRoutes = [
  { name: 'home', component: () => import('components/content/home/Home.svelte'), data: {} },
  { name: 'about', component: () => import('components/content/about/About.svelte'), data: {} },
  { name: 'resume', component: () => import('components/content/resume/Resume.svelte'), data: {} },
  { name: 'skills', component: () => import('components/content/skills/Skills.svelte'), data: {} },
  { name: 'projects', component: () => import('components/content/projects/Projects.svelte'), data: {} },
  { name: 'projects_nwoun', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'nwoun' } },
  { name: 'projects_nwgondtools', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'nwgondtools' } },
  { name: 'projects_greezy', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'greezy' } },
  { name: 'projects_edom', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'edom' } },
  { name: 'projects_neighboring', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'neighboring' } },
  { name: 'projects_jferda', component: () => import('components/content/projects/Project.svelte'), data: { projectIdent: 'jferda' } },
  { name: '404', component: () => import('components/content/home/Home.svelte'), data: {} },
]

export default baseRoutes
