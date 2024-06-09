<script>
import { localize } from 'utils/imports/core'
import { animationsActive, screenWidth } from 'utils/imports/store'
import { svelteTransitionFly } from 'utils/imports/svelte'
// material
import Fab, { Label } from '@smui/fab'

let el;
export let headlineLocaleIdent;
export let textLocaleIdent;
export let image;
export let delay;
export let transitionDuration;

$: {
  transitionDuration = $animationsActive ? transitionDuration : 0;
  delay = $animationsActive ? delay : 0;
}

const initTippy = () => {
  // eslint-disable-next-line no-underscore-dangle
  if (el._tippy) return;
  import('tippy.js').then((module) => {
    module.default(el, {
      content: $localize(textLocaleIdent),
      animation: 'shift-away',
      placement: 'bottom',
      offset: [0, 0],
    });
    // eslint-disable-next-line no-underscore-dangle
    el._tippy.show();
  });
};
</script>

<div 
  class="jdev-fab-wrapper" 
  bind:this="{el}"
  on:mouseenter="{initTippy}"
  on:click="{initTippy}"
  on:touchstart="{initTippy}"
  in:svelteTransitionFly="{{
    x: $screenWidth / 2, duration: transitionDuration, delay,
  }}"
>
    <Fab extended ripple="false" color="primary"><span class="background" style="background-image: url({image});"></span><Label>{$localize(headlineLocaleIdent)}</Label></Fab>
</div>