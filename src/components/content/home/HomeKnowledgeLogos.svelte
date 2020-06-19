<script>
import knowledgeVueImage from 'assets/media/images/knowledge-logos/vuejs.png';
import { fade } from 'svelte/transition';

import store from 'store/index';
// store values we need
const { transitionsActive } = store.home;

export let logosVisible = false;

</script>

{#if logosVisible}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
    {#if $transitionsActive}
    <div in:fade="{{ duration: 1500 }}" class="{logosVisible ? 'knowledge-logos visible' : 'knowledge-logos'}">
        <img alt="Vue.js" src="{knowledgeVueImage}" />
    </div>
    {:else}
    <div class="knowledge-logos visible">
        <img alt="Vue.js" src="{knowledgeVueImage}" />
    </div>
    {/if}
</div>
{/if}