<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFade, svelteLifecycleOnMount, svelteTick } from 'utils/imports/svelte';
import { skillCategories, skillList } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages } from 'utils/imports/helpers';
// material
import Tab, { Label as TabLabel } from '@smui/tab/styled';
import TabBar from '@smui/tab-bar/styled';
import { LeadingIcon } from '@smui/chips/styled';
// components
import SkillsProgressCat from 'components/content/skills/SkillsProgressCat.svelte';
import Loader from 'components/utilities/atoms/Loader.svelte';
// polyfill
import 'intersection-observer';

import 'assets/style/skills.scss';

const openCat = 'lang';
let currentCat;

// observe elements on each side of the navigation
// if not visible, show corresponding arrows
let rightArrowOberserver;
let leftArrowOberserver;
let showRightArrow = false;
let showLeftArrow = false;

svelteLifecycleOnMount(() => {
  let observerLeft;
  let observerRight;
  // preload images to smoothen transitions
  preloadImages(skillList.filter((skill) => skill.type === openCat).map((skill) => skill.logo)).finally(() => {
    currentCat = openCat;

    svelteTick().then(() => {
      observerLeft = new IntersectionObserver((entries) => {
        showLeftArrow = !entries[0].isIntersecting;
      });

      observerRight = new IntersectionObserver((entries) => {
        showRightArrow = !entries[0].isIntersecting;
      });

      observerLeft.observe(leftArrowOberserver);
      observerRight.observe(rightArrowOberserver);
    });

    setTimeout(() => {
      preloadImages(skillList.filter((skill) => skill.type !== openCat).map((skill) => skill.logo));
    }, 250);
  });

  return () => {
    if (observerLeft) observerLeft.unobserve(leftArrowOberserver);
    if (observerRight) observerRight.unobserve(rightArrowOberserver);
  };
});
</script>

{#if !currentCat}
<div class="jdev-route-skills-loader" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <Loader />
</div>
{:else}
<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      {#if showLeftArrow}<div class="jdev-arrow jdev-left-arrow"><LeadingIcon class="material-icons">
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/></svg>
      </LeadingIcon></div>{/if}
      <TabBar tabs={skillCategories} let:tab bind:active="{currentCat}">
        {#if tab === skillCategories[0]}<div class="jdev-scroll-start" bind:this="{leftArrowOberserver}" />{/if}
        <Tab {tab}>
          <TabLabel>{$localize(`skills.${tab}`)}</TabLabel>
        </Tab>
        {#if tab === [...skillCategories].pop()}<div class="jdev-scroll-end" bind:this="{rightArrowOberserver}" />{/if}
      </TabBar>
      {#if showRightArrow}<div class="jdev-arrow jdev-right-arrow"><LeadingIcon class="material-icons">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20px" viewBox="0 0 24 24" width="20px" fill="currentColor"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
      </LeadingIcon></div>{/if}
    </div>
    {#each skillCategories as cat}
        <SkillsProgressCat catIdent="{cat}" catOpen={cat === currentCat} />
    {/each}
  </div>
</div>
{/if}