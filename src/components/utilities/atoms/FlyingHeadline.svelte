<script>
  import { headerTransitionDuration } from 'utils/imports/config'
  import { localize } from 'utils/imports/core'
  import { animationsActive, screenWidth } from 'utils/imports/store'
  import { svelteTransitionFly } from 'utils/imports/svelte'

  export let localeKey
  export let transitionDirection = ['left', 'right']
  export let transitionDuration = headerTransitionDuration
  export let transitionDelay = 0

  const transitionX = transitionDirection.map(direction => $screenWidth * (direction === 'left' ? -2 : 2))
</script>

<h2
  class="mdc-typography--headline6"
  in:svelteTransitionFly|global={{
    x: transitionX[0],
    duration: $animationsActive ? transitionDuration : 0,
    delay: $animationsActive ? transitionDelay : 0,
  }}
>
  {$localize(localeKey)}
</h2>
<div
  class="jdev-headline-underline"
  in:svelteTransitionFly|global={{
    x: transitionX[1],
    duration: $animationsActive ? transitionDuration : 0,
    delay: $animationsActive ? transitionDelay : 0,
  }}
></div>

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
