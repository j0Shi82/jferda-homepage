<script>
import { svelteTransitionSlide } from 'utils/imports/svelte';
import { SkillsProgressRow } from 'utils/imports/components';
import { skillList } from 'utils/imports/data';
import { isRoutingInProgress } from 'utils/imports/store';

function getSortedSkillList(type = 'lang') {
  return skillList.filter((el) => el.type === type).sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
  });
}

export let catIdent;
export let catOpen = false;
</script>

<style lang="scss">
.mdc-typography--headline6 {
  text-align: center;
  border-bottom: 1px solid #000;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
</style>

{#if catOpen}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
  <div class="mdc-layout-grid__inner" in:svelteTransitionSlide="{{ delay: 0, duration: 500 }}">
      {#each getSortedSkillList(catIdent) as skill, i}
      <SkillsProgressRow themeClass="{skill.class}" logoSrc={skill.logo} logoAlt="{skill.name}" progress={skill.progress} delay="{100 * i}" />
      {/each}
  </div>
</div>
{/if}