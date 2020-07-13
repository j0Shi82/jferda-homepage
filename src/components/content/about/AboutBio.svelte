<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { animationsActive } from 'utils/imports/store';

export let transitionDuration;
export let delay;

$: {
  transitionDuration = $animationsActive ? transitionDuration : 0;
  delay = $animationsActive ? delay : 0;
}

const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
</script>

<p in:svelteTransitionFly="{{
        x: screenWidth / -2, duration: transitionDuration, delay,
    }}">{$localize('about.bio.bio1')}</p>
<p in:svelteTransitionFly="{{
        x: screenWidth / -2, duration: transitionDuration, delay: delay + transitionDuration,
    }}">{$localize('about.bio.bio2')}</p>
<p in:svelteTransitionFly="{{
        x: screenWidth / -2, duration: transitionDuration, delay: delay + transitionDuration * 2,
    }}">{$localize('about.bio.bio3')}</p>