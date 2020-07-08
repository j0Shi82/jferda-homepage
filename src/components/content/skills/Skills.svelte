<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade, svelteLifecycleOnMount } from 'utils/imports/svelte';
import { SkillsProgressCat } from 'utils/imports/components';
import { skillCategories, skillList } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';
import {
  MaterialTab, MaterialTabBar, MaterialTabLabel, MaterialIcon,
} from 'utils/imports/material';
import { preloadImages } from 'utils/imports/helpers';

import 'assets/style/skills.scss';

const openCat = 'lang';
let currentCat;

// preload images to smoothen transitions
preloadImages(skillList.filter((skill) => skill.type === openCat).map((skill) => skill.logo)).finally(() => {
  currentCat = openCat;

  setTimeout(() => {
    preloadImages(skillList.filter((skill) => skill.type !== openCat).map((skill) => skill.logo));
  }, 250);
});

// observe elements on each side of the navigation
// if not visible, show corresponding arrows
let rightArrowOberserver;
let leftArrowOberserver;
let showRightArrow = false;
let showLeftArrow = false;

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
      {#if showLeftArrow}<div class="jdev-arrow jdev-left-arrow"><MaterialIcon class="material-icons">arrow_back_ios</MaterialIcon></div>{/if}
      <MaterialTabBar tabs={skillCategories} let:tab bind:active="{currentCat}">
        {#if tab === skillCategories[0]}<div class="jdev-scroll-start" bind:this="{leftArrowOberserver}" />{/if}
        <MaterialTab {tab}>
          <MaterialTabLabel>{$localize(`skills.${tab}`)}</MaterialTabLabel>
        </MaterialTab>
        {#if tab === [...skillCategories].pop()}<div class="jdev-scroll-end" bind:this="{rightArrowOberserver}" />{/if}
      </MaterialTabBar>
      {#if showRightArrow}<div class="jdev-arrow jdev-right-arrow"><MaterialIcon class="material-icons">arrow_forward_ios</MaterialIcon></div>{/if}
    </div>
    {#each skillCategories as cat}
        <SkillsProgressCat catIdent="{cat}" catOpen={cat === currentCat} />
    {/each}
  </div>
</div>