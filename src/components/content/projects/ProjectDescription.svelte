<script>
  import { localize } from 'utils/imports/core'
  import { isDesktopBreakpoint, screenWidth } from 'utils/imports/store'
  import { svelteTransitionFly } from 'utils/imports/svelte'
  // components
  import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte'

  export let projectData = {}
  export let animationParams = {
    headline: {
      duration: 0,
      delay: 0,
    },
    content: {
      duration: 0,
      delay: 0,
      iterationDelay: 0,
    },
  }
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
  <FlyingHeadline
    localeKey="project.desc"
    transitionDirection={$isDesktopBreakpoint ? ['left', 'left'] : ['left', 'right']}
    transitionDuration={animationParams.headline.duration}
    transitionDelay={animationParams.headline.delay}
  />
  <p
    in:svelteTransitionFly|global={{
      x: $screenWidth / -2,
      duration: animationParams.content.duration,
      delay: animationParams.content.delay + animationParams.content.iterationDelay * 0,
    }}
  >
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html $localize(projectData.projectPage.descLocaleKey)}
  </p>
</div>
