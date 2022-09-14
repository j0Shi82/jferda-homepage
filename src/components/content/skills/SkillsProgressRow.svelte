<script>
import { animationsActive } from 'utils/imports/store';
// material
import LinearProgress from '@smui/linear-progress';
import { Icon } from '@smui/fab';
import '@smui/linear-progress/_index.scss';
import '@smui/fab/_index.scss';

export let logoSrc;
export let progress;
export let logoAlt;
export let themeClass;
export let delay = 0;

const upcoming = progress === 0 ? 'jdev-skills-upcoming' : '';

let currentProgress = $animationsActive ? 0 : progress;
setTimeout(() => {
  currentProgress = progress;
}, delay);
</script>

<style lang="scss" global>
  @import 'src/assets/style/variables.scss';
  .jdev-skills-progress .mdc-linear-progress__bar-inner {
    border-top-width: $skill-progress-height;
    border-top-style: solid;
  } 
</style>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-1-phone {upcoming}">
    <div class="jdev-skills-logo" title="{logoAlt}" style="background-image: url({logoSrc});" />
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-3-phone jdev-skills-progress-align {upcoming}">
    <LinearProgress class="jdev-skills-progress {themeClass}" aria-label="{ logoAlt }" progress="{currentProgress}" />
    {#if progress === 0}
    <Icon class="material-icons jdev-skills-upcoming-icon">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="0 0 20 20" width="48px" fill="#000000"><g><rect fill="none" height="20" width="20"/></g><g><path d="M14,3H6v4l3,3l-3,3v4h8v-4l-3-3l3-3V3z M13,13.41V16H7v-2.59l3-3L13,13.41z"/></g></svg>
    </Icon>
    {/if}
</div>