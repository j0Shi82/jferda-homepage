<script>
import { svelteTransitionFade, svelteLifecycleOnMount } from 'utils/imports/svelte';
import { isDesktopBreakpoint } from 'utils/imports/store';
import { routingFadeDuration, headerTransitionDuration, atomTransitionDuration } from 'utils/imports/config';
import { aboutPhilosophies } from 'utils/imports/data';
import { preloadImages } from 'utils/imports/helpers';
// components
import AboutPhilosophyButton from 'components/content/about/AboutPhilosophyButton.svelte';
import AboutPhilosophyHint from 'components/content/about/AboutPhilosophyHint.svelte';
import AboutBio from 'components/content/about/AboutBio.svelte';
import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';
// polyfill
import 'intersection-observer';

import 'assets/style/about.scss';

// preload images to smoothen transitions
preloadImages(aboutPhilosophies.map((el) => el.image));

// skip intro transition of philosophy buttons if not in view
let philosophyVisible = false;
let philosophyWrapper;
svelteLifecycleOnMount(() => {
  const observer = new IntersectionObserver((entries) => {
    philosophyVisible = entries[0].isIntersecting;
    if (philosophyVisible) observer.unobserve(philosophyWrapper);
  });

  observer.observe(philosophyWrapper);

  return () => {
    observer.unobserve(philosophyWrapper);
  };
});
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-about" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-6-desktop">
      <FlyingHeadline localeKey="about.bio.headline" transitionDirection="{$isDesktopBreakpoint ? ['left', 'left'] : ['left', 'right']}" />
      <AboutBio delay="{headerTransitionDuration}" transitionDuration="{atomTransitionDuration}" />
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-6-desktop jdev-fab-buttons" bind:this="{philosophyWrapper}">
      {#if philosophyVisible}
        <FlyingHeadline localeKey="about.philosophy.headline" transitionDirection="{$isDesktopBreakpoint ? ['right', 'right'] : ['left', 'right']}" />
        <AboutPhilosophyHint />
        <div class="jdev-philosophy-wrapper">
          {#each aboutPhilosophies as philosophy, i}
            <AboutPhilosophyButton 
              textLocaleIdent="{philosophy.textLocaleIdent}" 
              headlineLocaleIdent="{philosophy.headlineLocaleIdent}" 
              image="{philosophy.image}" 
              delay="{i * (atomTransitionDuration / 2) + headerTransitionDuration}"
              transitionDuration="{atomTransitionDuration / 2}"
            />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>