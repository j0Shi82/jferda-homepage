<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { SkillsProgressCat } from 'utils/imports/components';
import { skillCategories } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';

import 'assets/style/skills.scss';

let currentCat = skillCategories[0].ident;

function handleCatClick(e) {
  currentCat = e.detail;
}
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    {#each skillCategories as cat}
        <SkillsProgressCat catName="{cat.name}" catIdent="{cat.ident}" catOpen={cat.ident === currentCat} on:catOpened="{handleCatClick}" />
    {/each}
    
</div>