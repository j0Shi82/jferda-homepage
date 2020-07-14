<script>
import { localize } from 'utils/imports/core';
import { svelteTransitionFly } from 'utils/imports/svelte';
import { MaterialFab, MaterialIcon, MaterialFabLabel } from 'utils/imports/material';
import { FontAwesomeIcon } from 'utils/imports/components';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';

export let projectData;
export let animationTotalDuration;
</script>

<style lang="scss">
  .mdc-layout-grid__cell {
    display: flex;
    justify-content: space-evenly;
  }
</style>

{#if projectData.projectPage.links.length}
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" in:svelteTransitionFly="{{ y: -400, duration: animationTotalDuration }}">
    {#each projectData.projectPage.links as link, i}
        {#if link.type === 'web'}
            <MaterialFab on:click="{() => { window.open(link.url); }}" mini extended><FontAwesomeIcon class="mdc-fab__icon" icon={faGlobe}></FontAwesomeIcon><MaterialFabLabel>{ $localize(link.labelLocaleIdent)}</MaterialFabLabel></MaterialFab>
        {/if}
    {/each}
    </div>
{/if}