<script>
import { MaterialLinearProgress } from 'utils/imports/material';

export let logoSrc;
export let progress;
export let logoAlt;
export let themeClass;
export let delay = 0;

let currentProgress = 0;
setTimeout(() => {
  currentProgress = progress;
}, delay);
</script>

<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-desktop mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-1-phone">
    <div class="jdev-skills-logo" title="{logoAlt}" style="background-image: url({logoSrc});" />
</div>
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-desktop mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-3-phone jdev-skills-progress-align">
    <MaterialLinearProgress class="jdev-skills-progress {themeClass}" progress="{currentProgress}" />
</div>