<script>
import { svelteTransitionSlide } from 'utils/imports/svelte';
import { skillList } from 'utils/imports/data';
import { atomTransitionDuration, atomTransitionDurationShort } from 'utils/imports/config';
import { animationsActive } from 'utils/imports/store';
// components
import SkillsProgressRow from 'components/content/skills/SkillsProgressRow.svelte';

import 'assets/style/skillsprogress.scss';

function getSortedSkillList(type = 'lang') {
  return skillList.filter((el) => el.type === type).sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
  });
}

export let catIdent;
export let catOpen = false;
export let slideDelay = 0;
export let slideDuration = atomTransitionDuration;
export let rowIterationDelay = atomTransitionDurationShort;

$: {
  slideDuration = $animationsActive ? slideDuration : 0;
  slideDelay = $animationsActive ? slideDelay : 0;
}
</script>

{#if catOpen}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-skills-progress-cat" class:no-animation="{!$animationsActive}">
  <div class="mdc-layout-grid__inner" in:svelteTransitionSlide="{{ duration: slideDuration, delay: slideDelay }}">
      {#each getSortedSkillList(catIdent) as skill, i}
      <SkillsProgressRow themeClass="{skill.class}" logoSrc={skill.logo} logoAlt="{skill.name}" progress={skill.progress} delay="{slideDelay + (rowIterationDelay * i)}" />
      {/each}
  </div>
</div>
{/if}