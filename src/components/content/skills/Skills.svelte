<script>
import SkillsProgressCat from 'components/content/skills/SkillsProgressCat.svelte';
import 'assets/style/skills.scss';
import { cats } from 'config/data/skills';

let currentCat = 'lang';

function handleCatClick(e) {
  currentCat = e.detail;
}
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills">
    {#each cats as cat}
        <SkillsProgressCat catName="{cat.name}" catIdent="{cat.ident}" catOpen={cat.ident === currentCat} on:catOpened="{handleCatClick}" />
    {/each}
    
</div>