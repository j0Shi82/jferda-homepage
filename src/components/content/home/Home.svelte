<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade, svelteLifecycleOnMount } from 'utils/imports/svelte';
import { HomeRoutes } from 'utils/imports/components';
import { homeKnowledgeLogoItems } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';
import { isMobileBreakpoint, isDesktopBreakpoint, isTabletBreakpoint } from 'utils/imports/store';
import { preloadImages } from 'utils/imports/helpers';

preloadImages(homeKnowledgeLogoItems.map((el) => el.logo));

const knowledgeLogoSet = homeKnowledgeLogoItems.map((item) => item.ident);
let currentLogoItem = { ident: '', logo: '' };
let typographyTextClass;
$: {
  if ($isMobileBreakpoint) typographyTextClass = 'mdc-typography--headline6';
  if ($isTabletBreakpoint) typographyTextClass = 'mdc-typography--headline5';
  if ($isDesktopBreakpoint) typographyTextClass = 'mdc-typography--headline4';
}

const flipXSteps = [false, false];

svelteLifecycleOnMount(() => {
  [currentLogoItem] = homeKnowledgeLogoItems;
  setInterval(() => {
    flipXSteps[1] = false;
    const currentIndex = homeKnowledgeLogoItems.map((el) => el.ident).indexOf(currentLogoItem.ident);
    if (knowledgeLogoSet[currentIndex + 1]) currentLogoItem = homeKnowledgeLogoItems[currentIndex + 1];
    else [currentLogoItem] = homeKnowledgeLogoItems;
  }, 3000);

  setTimeout(() => {
    flipXSteps[0] = true;
    setInterval(() => { flipXSteps[0] = true; }, 3000);
  }, 300);

  setTimeout(() => {
    flipXSteps[0] = false; flipXSteps[1] = true;
    setInterval(() => { flipXSteps[0] = false; flipXSteps[1] = true; }, 3000);
  }, 2700);
});

import 'assets/style/home.scss';
</script>

<div class="jdev-route-home" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-knowledge-logo {currentLogoItem.ident}">
            <div 
              style="background-image: url({currentLogoItem.logo});" 
              class:flipX-step1="{flipXSteps[0]}"
              class:flipX-step2="{flipXSteps[1]}"
            ></div>
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 {typographyTextClass} jdev-intro-text {currentLogoItem.ident}">
            {@html $localize('home.maintext')}
          </div>
          <HomeRoutes colorClass="{currentLogoItem.ident}" />
        </div>
    </div>
</div>