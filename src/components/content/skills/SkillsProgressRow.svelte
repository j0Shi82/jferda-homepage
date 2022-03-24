<script>
import { MaterialLinearProgress } from 'utils/imports/material';
import { animationsActive } from 'utils/imports/store';

export let logoSrc;
export let progress;
export let logoAlt;
export let themeClass;
export let delay = 0;

let currentProgress = $animationsActive ? 0 : progress;
setTimeout(() => {
  currentProgress = progress;
}, delay);
</script>

<style lang="scss">
  @import 'src/assets/style/variables.scss';
  :global(.jdev-skills-progress .mdc-linear-progress__bar-inner) {
    border-top-width: $skill-progress-height;
    border-top-style: solid;
  } 
</style>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-1-phone">
    <div class="jdev-skills-logo" title="{logoAlt}" style="background-image: url({logoSrc});" />
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-3-phone jdev-skills-progress-align">
    <MaterialLinearProgress class="jdev-skills-progress {themeClass}" progress="{currentProgress}" />
</div>