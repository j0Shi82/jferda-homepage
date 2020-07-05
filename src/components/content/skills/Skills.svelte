<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade, svelteLifecycleOnMount } from 'utils/imports/svelte';
import { SkillsProgressCat } from 'utils/imports/components';
import { skillCategories, skillList } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';
import {
  MaterialTab, MaterialTabBar, MaterialTabLabel, MaterialIcon,
} from 'utils/imports/material';

import 'assets/style/skills.scss';

const openCat = 'lang';
let rightArrowOberserver;
let leftArrowOberserver;
let showRightArrow = false;
let showLeftArrow = false;
let currentCat;

$: {
  console.log(showLeftArrow, showRightArrow);
}

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

svelteLifecycleOnMount(() => {
  const observerLeft = new IntersectionObserver((entries) => {
    showLeftArrow = !entries[0].isIntersecting;
  });

  const observerRight = new IntersectionObserver((entries) => {
    showRightArrow = !entries[0].isIntersecting;
  });

  observerLeft.observe(leftArrowOberserver);
  observerRight.observe(rightArrowOberserver);
  return () => {
    observerLeft.unobserve(leftArrowOberserver);
    observerRight.unobserve(rightArrowOberserver);
  };
});
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      {#if showLeftArrow}<div class="jdev-left-arrow"><MaterialIcon class="material-icons">keyboard_arrow_left</MaterialIcon></div>{/if}
      <MaterialTabBar tabs={skillCategories} let:tab bind:active="{currentCat}">
        {#if tab === skillCategories[0]}<div class="jdev-scroll-start" bind:this="{leftArrowOberserver}" />{/if}
        <MaterialTab {tab}>
          <MaterialTabLabel>{$localize(`skills.${tab}`)}</MaterialTabLabel>
        </MaterialTab>
        {#if tab === [...skillCategories].pop()}<div class="jdev-scroll-end" bind:this="{rightArrowOberserver}" />{/if}
      </MaterialTabBar>
      {#if showRightArrow}<div class="jdev-right-arrow"><MaterialIcon class="material-icons">keyboard_arrow_right</MaterialIcon></div>{/if}
    </div>
    {#each skillCategories as cat}
        <SkillsProgressCat catIdent="{cat}" catOpen={cat === currentCat} />
    {/each}
  </div>
</div>