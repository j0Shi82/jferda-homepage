<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { headerTransitionDuration } from 'utils/imports/config';
import { screenWidth } from 'utils/imports/store';
export let localeKey;
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
  transition: all 1s ease-in-out;
}
</style>

<h2 class="mdc-typography--headline6" in:svelteTransitionFly="{{ x: $screenWidth / -2, duration: headerTransitionDuration }}">{$localize(localeKey)}</h2>
<div class="jdev-headline-underline" in:svelteTransitionFly="{{ x: $screenWidth / 2, duration: headerTransitionDuration }}"></div>