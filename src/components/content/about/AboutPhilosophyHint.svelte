<script>
  import { atomTransitionDurationShort } from 'utils/imports/config'
  import { localize } from 'utils/imports/core'
  import { isTouchDevice } from 'utils/imports/store'
  import { svelteTransitionFly } from 'utils/imports/svelte'

  import { animationsActive, screenWidth } from 'utils/imports/store'

  export let transitionDelay = 0

  const transitionX = $screenWidth * -2
</script>

<p
  class="jdev-philosophy-hint"
  in:svelteTransitionFly={{
    x: transitionX,
    duration: $animationsActive ? atomTransitionDurationShort : 0,
    delay: $animationsActive ? transitionDelay : 0,
  }}
>
  {#if $isTouchDevice}
    {$localize('about.philosophy.hint.touch')}
  {:else}
    {$localize('about.philosophy.hint.notouch')}
  {/if}
</p>
