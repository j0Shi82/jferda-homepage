<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { AboutPhilosophyButton, AboutBioSlider } from 'utils/imports/components';
import { localize } from 'utils/imports/core';
import { routingFadeDuration } from 'utils/imports/config';
import { aboutPhilosophies } from 'utils/imports/data';

import 'assets/style/about.scss';
</script>

<style lang="scss">
.mdc-typography--headline6 {
  text-align: center;
  border-bottom: 1px solid #000;
}
</style>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-about" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <h2 class="mdc-typography--headline6">{$localize('about.bio.headline')}</h2>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <AboutBioSlider />
    </div>
  </div>
  <h2 class="mdc-typography--headline6">{$localize('about.philosophy.headline')}</h2>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-fab-buttons" style="text-align: center; display: flex; justify-content: space-evenly; align-items: center;">
      {#each aboutPhilosophies as philosophy}
        <AboutPhilosophyButton textLocaleIdent="{philosophy.textLocaleIdent}" headlineLocaleIdent="{philosophy.headlineLocaleIdent}" image="{philosophy.image}" />
      {/each}
    </div>
  </div>
</div>