<script>
import { svelteTransitionSlide, svelteCreateEventDispatcher } from 'utils/imports/svelte';
import { SkillsProgressRow } from 'utils/imports/components';
import { skillList } from 'utils/imports/data';
import { isRoutingInProgress } from 'utils/imports/store';

const svelteDispatchEvent = svelteCreateEventDispatcher();

function getSortedSkillList(type = 'lang') {
  return skillList.filter((el) => el.type === type).sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
  });
}

export let catName;
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

<h2 class="mdc-typography--headline6" on:click="{() => { catOpen = !catOpen; if (catOpen) svelteDispatchEvent('catOpened', catIdent); }}">
  <span>{catName}</span>
  {#if !catOpen}<span class="material-icons" aria-hidden="true">add_circle</span>{/if}
  {#if catOpen}<span class="material-icons" aria-hidden="true">remove_circle</span>{/if}
</h2>
    
{#if catOpen}
<div class="mdc-layout-grid__inner" in:svelteTransitionSlide="{{ delay: 0, duration: 200 }}" out:svelteTransitionSlide="{{ delay: 0, duration: $isRoutingInProgress ? 0 : 200 }}">
    {#each getSortedSkillList(catIdent) as skill, i}
    <SkillsProgressRow themeClass="{skill.class}" logoSrc={skill.logo} logoAlt="{skill.name}" progress={skill.progress} delay="{100 * i}" />
    {/each}
</div>
{/if}