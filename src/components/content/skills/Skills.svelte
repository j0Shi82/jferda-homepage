<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade } from 'utils/imports/svelte';
import { SkillsProgressCat } from 'utils/imports/components';
import { skillCategories, skillList } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';
import { MaterialTab, MaterialTabBar, MaterialTabLabel } from 'utils/imports/material';

import 'assets/style/skills.scss';

const openCat = 'lang';
let currentCat;

// preload images to smoothen transitions
const promises = [];
skillList.filter((skill) => skill.type === openCat).forEach((skill) => {
  promises.push(new Promise(((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.src = skill.logo;
  })));
});

Promise.all(promises).finally(() => {
  currentCat = openCat;

  setTimeout(() => {
    skillList.filter((skill) => skill.type !== openCat).forEach((skill) => {
      const img = new Image();
      img.src = skill.logo;
    });
  }, 250);
});
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <MaterialTabBar tabs={skillCategories} let:tab bind:active="{currentCat}">
        <MaterialTab {tab}>
          <MaterialTabLabel>{$localize(`skills.${tab}`)}</MaterialTabLabel>
        </MaterialTab>
      </MaterialTabBar>
    </div>
    {#each skillCategories as cat}
        <SkillsProgressCat catIdent="{cat}" catOpen={cat === currentCat} />
    {/each}
  </div>
</div>