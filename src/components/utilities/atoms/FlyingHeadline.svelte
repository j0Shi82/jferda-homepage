<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { headerTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';

export let localeKey;
export let transitionDirection = ['left', 'right'];
export let transitionDuration = headerTransitionDuration;

const transitionX = transitionDirection.map((direction) => $screenWidth * (direction === 'left' ? -2 : 2));
</script>

<style lang="scss">
@import 'src/assets/style/variables.scss';

.jdev-headline-underline {
  height: 1px;
  width: 100%;
  border-top: 1px solid #000;
  margin-bottom: $h2-margin;
}

h2 {
  text-align: center;
  margin-top: $h2-margin;
  margin-bottom: 0;
}
</style>

<h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: transitionX[0], duration: transitionDuration }}">{$localize(localeKey)}</h2>
<div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: transitionX[1], duration: transitionDuration }}"></div>