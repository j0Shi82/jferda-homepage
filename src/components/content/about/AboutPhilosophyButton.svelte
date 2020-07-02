<script>
import { svelteLifecycleOnMount, svelteTransitionFly } from 'utils/imports/svelte';
import { MaterialLabel, MaterialFab } from 'utils/imports/material';
import { Tooltip } from 'utils/imports/plugins';
import { localize } from 'utils/imports/core';

let el;
export let headlineLocaleIdent;
export let textLocaleIdent;
export let image;
export let delay;
export let transitionDuration;

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

svelteLifecycleOnMount(() => {
  Tooltip(el, {
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
    x: screenWidth / 2, duration: transitionDuration, delay,
  }}"
>
    <MaterialFab extended ripple="false" color="primary"><span class="background" style="background-image: url({image});"></span><MaterialLabel>{$localize(headlineLocaleIdent)}</MaterialLabel></MaterialFab>
</div>