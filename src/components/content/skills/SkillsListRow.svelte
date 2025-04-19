<script>
  import { animationsActive } from 'utils/imports/store'

  export let logoSrc
  export let logoAlt
  export let themeClass
  export let style = ''
  export let delay = 0

  let currentScale = $animationsActive ? 0 : 1
  setTimeout(() => {
    currentScale = 1
  }, delay)
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-1-phone {themeClass}" {style}>
  <div class="jdev-skills-row-logo" title={logoAlt} style="background-image: url({logoSrc}); transform: scale({currentScale});" />
</div>

<style lang="scss">
  .jdev-skills-row-logo {
    transition: transform var(--jdev-skills-progress-duration) ease-in-out;
  }
</style>
