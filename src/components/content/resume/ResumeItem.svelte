<script>
import { formatDate, localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';
import { animationsActive, screenWidth } from 'utils/imports/store';
// import * as FontAwesomeIcon from 'fa-svelte';
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons/faFilePdf';

export let item = {
  startDate: new Date(),
  endDate: new Date(),
  ended: true,
  range: true,
  textLocaleIdent: '',
  // doc: false,
};
export let delay = 0;
export let transitionDuration = 500;

$: {
  transitionDuration = $animationsActive ? transitionDuration : 0;
  delay = $animationsActive ? delay : 0;
}

let visible = false;
setTimeout(() => {
  visible = true;
}, delay);
</script>

<style lang="scss">
  .jdev-resume-date,
  .jdev-resume-content {
    opacity: hidden;

    &.visible {
      visibility: visible;
    }

    :global(.jdev-resume-file-attachment) {
      font-size: 14px;
    }
  }
</style>

<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-resume-date" 
    class:visible="{visible}"
    in:svelteTransitionFly="{{
        x: $screenWidth / -2, duration: transitionDuration, delay,
    }}"
>
    {
        !item.ended
        ? `${$localize('resume.stillgoing')} ${$formatDate(item.startDate, { format: 'medium' })}`
        : `${item.range ? `${$formatDate(item.startDate, { format: 'medium' })} - ` : ''}${$formatDate(item.endDate, { format: 'medium' })}`
    }
</div>
<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-9-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-resume-content" 
    class:visible="{visible}"
    in:svelteTransitionFly="{{
        x: $screenWidth / 2, duration: transitionDuration, delay, easing: svelteEasingBackOut,
    }}"
>
    <!-- {#if item.doc}
      <a href="{item.doc}" target="_blank"><FontAwesomeIcon class="jdev-resume-file-attachment" icon={faFilePdf}></FontAwesomeIcon></a>
    {/if} -->
    {@html $localize(item.textLocaleIdent)}
</div>