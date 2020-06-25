<script>
import SkillsProgressRow from 'components/content/skills/SkillsProgressRow.svelte';
import { slide } from 'svelte/transition';
import { location } from 'svelte-spa-router';
import { createEventDispatcher, onDestroy } from 'svelte';
import { skills } from 'config/data/skills';

// store and config values we need
import appStore from 'store/app/index';

const { isRouting } = appStore.router;

function getSortedSkillList(type = 'lang') {
  return skills.filter((el) => el.type === type).sort((a, b) => {
    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
    return 0;
  });
}

const dispatch = createEventDispatcher();

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

<h2 class="mdc-typography--headline6" on:click="{() => { catOpen = !catOpen; if (catOpen) dispatch('catOpened', catIdent); }}">
  <span>{catName}</span>
  {#if !catOpen}<span class="material-icons" aria-hidden="true">add_circle</span>{/if}
  {#if catOpen}<span class="material-icons" aria-hidden="true">remove_circle</span>{/if}
</h2>
    
{#if catOpen}
<div class="mdc-layout-grid__inner" in:slide="{{ delay: 0, duration: 200 }}" out:slide="{{ delay: 0, duration: $isRouting ? 0 : 200 }}">
    {#each getSortedSkillList(catIdent) as skill}
    <SkillsProgressRow themeClass="{skill.class}" logoSrc={skill.logo} logoAlt="{skill.name}" progress={skill.progress} />
    {/each}
</div>
{/if}