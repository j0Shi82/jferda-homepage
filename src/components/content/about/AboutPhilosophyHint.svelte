<script>
import { svelteTransitionFly } from 'utils/imports/svelte'
import { isTouchDevice } from 'utils/imports/store'
import { localize } from 'utils/imports/core'
import { headerTransitionDuration } from 'utils/imports/config'

import { screenWidth, animationsActive } from 'utils/imports/store'

export let transitionDelay = 0

const transitionX = $screenWidth * -2
</script>

<p class="jdev-philosophy-hint" in:svelteTransitionFly="{{
  x: transitionX,
  duration: $animationsActive ? headerTransitionDuration : 0,
  delay: $animationsActive ? transitionDelay : 0,
}}">
    {#if $isTouchDevice}
        {$localize('about.philosophy.hint.touch')}
    {:else}
        {$localize('about.philosophy.hint.notouch')}
    {/if}
</p>
