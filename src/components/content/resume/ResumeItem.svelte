<script>
import { formatDate, localize } from 'utils/imports/core';
import { svelteTransitionFly, svelteEasingBackOut } from 'utils/imports/svelte';

export let item = {
  startDate: new Date(),
  endDate: new Date(),
  ended: true,
  textLocaleIdent: '',
};
export let delay = 0;
export let transitionDuration = 500;

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
  }
</style>

<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-resume-date" 
    class:visible="{visible}"
    in:svelteTransitionFly="{{
        x: screenWidth / -2, duration: transitionDuration, delay,
    }}"
>
    {
        !item.ended
        ? `${$localize('resume.stillgoing')} ${$formatDate(item.startDate, { format: 'medium' })}`
        : `${$formatDate(item.startDate, { format: 'medium' })} - ${$formatDate(item.endDate, { format: 'medium' })}`
    }
</div>
<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-9-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone jdev-resume-content" 
    class:visible="{visible}"
    in:svelteTransitionFly="{{
        x: screenWidth / 2, duration: transitionDuration, delay, easing: svelteEasingBackOut,
    }}"
>
    {@html $localize(item.textLocaleIdent)}
</div>