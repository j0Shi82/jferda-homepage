<script>
  import { routingFadeDuration } from 'utils/imports/config'
  import { projectList } from 'utils/imports/data'
  import { svelteLifecycleOnMount, svelteTransitionFade } from 'utils/imports/svelte'
  // components
  import ProjectsCard from 'components/content/projects/ProjectsCard.svelte'
  import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte'

  import 'assets/style/projects.scss'

  import { wrapGrid } from 'animate-css-grid'

  svelteLifecycleOnMount(() => {
    const grid = document.querySelector('.mdc-layout-grid__inner')
    wrapGrid(grid)
  })
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-projects" in:svelteTransitionFade|global={{ duration: routingFadeDuration }}>
  <FlyingHeadline localeKey="navigation.routes.projects" />
  <div class="mdc-layout-grid__inner">
    {#each projectList as project, i}
      <ProjectsCard {i} {project} />
    {/each}
  </div>
</div>
