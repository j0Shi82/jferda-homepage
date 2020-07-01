<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade } from 'utils/imports/svelte';
import { HomeRoutes } from 'utils/imports/components';
import { routingFadeDuration } from 'utils/imports/config';
import { isMobileBreakpoint, isDesktopBreakpoint, isTabletBreakpoint } from 'utils/imports/store';

const knowledgeLogoSet = ['vue', 'svelte', 'javascript', 'php', 'wordpress', 'docker', 'node', 'git'];
let currentLogo = 'vue';
let typographyTextClass;
$: {
  if ($isMobileBreakpoint) typographyTextClass = 'mdc-typography--headline6';
  if ($isTabletBreakpoint) typographyTextClass = 'mdc-typography--headline5';
  if ($isDesktopBreakpoint) typographyTextClass = 'mdc-typography--headline4';
}

setInterval(() => {
  const currentIndex = knowledgeLogoSet.indexOf(currentLogo);
  if (knowledgeLogoSet[currentIndex + 1]) currentLogo = knowledgeLogoSet[currentIndex + 1];
  else [currentLogo] = knowledgeLogoSet;
}, 3000);

import 'assets/style/home.scss';
</script>

<div class="jdev-route-home" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-knowledge-logo">
            {#each knowledgeLogoSet as logo, i}
              {#if currentLogo === logo}<div class="{logo}"></div>{/if}
            {/each}
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 {typographyTextClass} jdev-intro-text {currentLogo}">
            {@html $localize('home.maintext')}
          </div>
          <HomeRoutes colorClass="{currentLogo}" />
        </div>
    </div>
</div>