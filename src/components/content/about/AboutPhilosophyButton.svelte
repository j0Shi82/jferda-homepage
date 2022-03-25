<script>
import { svelteLifecycleOnMount, svelteTransitionFly } from 'utils/imports/svelte';
import { MaterialFabLabel, MaterialFab } from 'utils/imports/material';
import { localize } from 'utils/imports/core';
import { animationsActive, screenWidth } from 'utils/imports/store';
// plugins
import tippy from 'tippy.js';

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

svelteLifecycleOnMount(() => {
  tippy(el, {
    content: $localize(textLocaleIdent),
    animation: 'shift-away',
    placement: 'bottom',
    offset: [0, 0],
  });
});
</script>

<div 
  class="jdev-fab-wrapper" 
  bind:this="{el}"
  in:svelteTransitionFly="{{
    x: $screenWidth / 2, duration: transitionDuration, delay,
  }}"
>
    <MaterialFab extended ripple="false" color="primary"><span class="background" style="background-image: url({image});"></span><MaterialFabLabel>{$localize(headlineLocaleIdent)}</MaterialFabLabel></MaterialFab>
</div>