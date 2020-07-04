<script>
import { svelteTransitionFade, svelteTransitionFly } from 'utils/imports/svelte';
import { AboutPhilosophyButton, AboutBio } from 'utils/imports/components';
import { localize } from 'utils/imports/core';
import { isDesktopBreakpoint } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { aboutPhilosophies } from 'utils/imports/data';

import 'assets/style/about.scss';

const itemTransitionDuration = 500;
const x = 500;
const headerTransitionDuration = routingFadeDuration * 5;

const flyOptions = {
  x: x * (-1),
  duration: headerTransitionDuration,
};
const flyOptionsReverse = {
  ...flyOptions,
  x,
};

// preload images to smoothen transitions
aboutPhilosophies.forEach((philo) => {
  let img = new Image();
  img.src = philo.image;
});
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-about" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-6-desktop">
      <h2 
        class="mdc-typography--headline6" 
        in:svelteTransitionFly="{$isDesktopBreakpoint ? flyOptions : flyOptions}"
      >
        {$localize('about.bio.headline')}
      </h2>
      <div class="jdev-headline-underline" in:svelteTransitionFly="{$isDesktopBreakpoint ? flyOptions : flyOptionsReverse}"></div>
      <AboutBio delay="{headerTransitionDuration}" transitionDuration="{itemTransitionDuration}" />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-6-desktop jdev-fab-buttons">
      <h2 
        class="mdc-typography--headline6" 
        in:svelteTransitionFly="{$isDesktopBreakpoint ? flyOptionsReverse : flyOptions}"
      >
        {$localize('about.philosophy.headline')}
      </h2>
      <div class="jdev-headline-underline" in:svelteTransitionFly="{$isDesktopBreakpoint ? flyOptionsReverse : flyOptionsReverse}"></div>
      <div class="jdev-philosophy-wrapper">
        {#each aboutPhilosophies as philosophy, i}
          <AboutPhilosophyButton 
            textLocaleIdent="{philosophy.textLocaleIdent}" 
            headlineLocaleIdent="{philosophy.headlineLocaleIdent}" 
            image="{philosophy.image}" 
            delay="{i * (itemTransitionDuration / 2) + headerTransitionDuration}"
            transitionDuration="{itemTransitionDuration / 2}"
          />
        {/each}
      </div>
    </div>
  </div>
</div>