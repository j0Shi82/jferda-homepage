<script>
  import { routingFadeDuration } from 'utils/imports/config'
  import { projectList, skillList } from 'utils/imports/data'
  import { getProjectAnimationParams, preloadImages } from 'utils/imports/helpers'
  import { animationsActive, currentProject, projectInitializing } from 'utils/imports/store'
  import { svelteLifecycleOnDestroy, svelteLifecycleOnMount, svelteTransitionFade } from 'utils/imports/svelte'
  // components
  import ProjectDescription from 'components/content/projects/ProjectDescription.svelte'
  import ProjectGallery from 'components/content/projects/ProjectGallery.svelte'
  import ProjectKeys from 'components/content/projects/ProjectKeys.svelte'
  import ProjectLinks from 'components/content/projects/ProjectLinks.svelte'
  import ProjectSkills from 'components/content/projects/ProjectSkills.svelte'

  import 'assets/style/project.scss'

  let animationTotalDuration = $animationsActive ? 1500 : 0
  $: animationTotalDuration = $animationsActive ? 1500 : 0
  let currentTimeout = null

  // animation logic
  let skillsAnimationParams
  let descAnimationParams
  let keysAnimationParams
  let galleryAnimationParams

  function getSectionAnimationParams(projectData) {
    const skillCount = skillList.filter(el => el.type === projectData.ident).length
    const keysCount = projectData.projectPage.keys.length
    const galleryCount = projectData.projectPage.gallery.length
    ;[skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams] = getProjectAnimationParams(animationTotalDuration, $animationsActive, [
      skillCount,
      1,
      keysCount,
      galleryCount,
    ])
    return [skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams]
  }

  // scaling and animations
  let projectData
  let scaleY = 1
  let padding = 2
  let initialized = false
  let loading = true
  let routeContainer
  let projectContainer

  function load() {
    loading = true
    initialized = false
    const images = []
    const [data] = projectList.filter(project => project.ident === $currentProject)
    const projectSkills = skillList.filter(el => el.type === $currentProject)
    images.push(data.projectPage.titleImage)
    images.push(...data.projectPage.gallery.map(image => image.thumb))
    images.push(...projectSkills.map(skill => skill.logo))
    preloadImages(images).finally(() => {
      loading = false
    })
  }

  function scale() {
    if ($animationsActive) {
      initialized = false
      // scale window to device height and unfold when animations finished
      scaleY = (window.innerHeight - 96) / projectContainer.clientHeight
      console.log(scaleY)
      document.querySelector('body').classList.add('jdev-scroll-lock')

      // changing padding will force browsers to redraw the page, it's an ugly way to get rid of blurry text after scale in chrome
      const el = document.querySelector('.jdev-route-project')
      el.addEventListener('transitionend', (e) => {
        if (e.target === el) {
          padding = 0
        }
      })

      if (currentTimeout) clearTimeout(currentTimeout)
      currentTimeout = setTimeout(() => {
        scaleY = 1
        initialized = true
        projectInitializing.set(false)
        document.querySelector('body').classList.remove('jdev-scroll-lock')
      }, animationTotalDuration + 250)
    }
  }

  $: {
    ;[projectData] = projectList.filter(project => project.ident === $currentProject)
    ;[skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams] = getSectionAnimationParams(projectData)
    load()
  }

  $: {
    // using bing:this as onUpdateOnMount service
    // route change => new content gets rendered => projectContainer gets updated => scale gets triggered
    if (routeContainer) {
      scale()
    }
  }

  // first scaling on page load
  svelteLifecycleOnMount(() => {
    load()
  })

  // destroy timer so that different project routes do not overlap
  svelteLifecycleOnDestroy(() => {
    if (currentTimeout) clearTimeout(currentTimeout)
  })
</script>

{#if !loading}
  <div
    class="jdev-route-project mdc-typography--body1"
    style="transform: scaleY({scaleY});"
    in:svelteTransitionFade|global={{ duration: routingFadeDuration }}
    class:initialized
    bind:this={routeContainer}
  >
    <!-- eaching through all projects is the only way I've come up with to restart the animation for every project on route change, at least with my current approach to routes -->
    {#each projectList as project (project.ident)}
      {#if project.ident === $currentProject}
        <div class="mdc-layout-grid" bind:this={projectContainer}>
          <div class="mdc-layout-grid__inner" style="padding-right: {padding}px;">
            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <div class="jdev-project-banner" style="background-image: url({projectData.projectPage.titleImage});" in:svelteTransitionFade|global={{ duration: animationTotalDuration }} />
            </div>
            <ProjectLinks {projectData} {animationTotalDuration} />
            <ProjectDescription {projectData} animationParams={descAnimationParams} />
            <ProjectKeys {projectData} animationParams={keysAnimationParams} />
            <ProjectSkills {projectData} animationParams={skillsAnimationParams} />
            {#if projectData.projectPage.gallery.length > 0}
              <ProjectGallery {projectData} animationParams={galleryAnimationParams} />
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
{/if}
