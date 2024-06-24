<script>
  import { animationsActive } from 'utils/imports/store'
  import { svelteTransitionFly } from 'utils/imports/svelte'
  // material
  import { Icon } from '@smui/fab'
  import LinearProgress from '@smui/linear-progress'

  let progressEl

  export let logoSrc
  export let progress
  export let logoAlt
  export let themeClass
  export let delay = 0
  export let style = ''
  export let duration = $animationsActive ? 500 : 0

  const upcoming = progress === 0 ? 'jdev-skills-upcoming' : ''

  let currentProgress = $animationsActive ? 0 : progress
  let currentScale = $animationsActive ? 0 : 1
  setTimeout(() => {
    currentProgress = progress
    currentScale = 1
  }, delay)

  $: {
    console.log(progressEl?.getElement())
  }
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-1-phone {upcoming}" {style}>
  <div class="jdev-skills-progress-logo" title={logoAlt} style="background-image: url({logoSrc}); transform: scale({currentScale})" />
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-3-phone jdev-skills-progress-align {upcoming}" {style}>
  <LinearProgress class="jdev-skills-progress {themeClass}" aria-label={logoAlt} progress={currentProgress} bind:this={progressEl} />
  {#if progress === 0}
    <Icon class="material-icons jdev-skills-upcoming-icon">
      <svg
        in:svelteTransitionFly|global={{ x: ((progressEl?.getElement().clientWidth ?? 400) - 48) * -1, duration: duration, delay: delay }}
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 20 20"
        height="48px"
        viewBox="0 0 20 20"
        width="48px"
        fill="#000000"><g><rect fill="none" height="20" width="20" /></g><g><path d="M14,3H6v4l3,3l-3,3v4h8v-4l-3-3l3-3V3z M13,13.41V16H7v-2.59l3-3L13,13.41z" /></g></svg
      >
    </Icon>
  {/if}
</div>

<style lang="scss">
  @import 'src/assets/style/variables.scss';
  :global(.jdev-skills-progress .mdc-linear-progress__bar-inner) {
    border-top-width: $skill-progress-height;
    border-top-style: solid;
  }

  .jdev-skills-progress-logo {
    transition: transform var(--jdev-skills-progress-duration) ease-in-out;
  }
</style>
