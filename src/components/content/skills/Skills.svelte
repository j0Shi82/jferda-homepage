<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { SkillsProgressCat } from 'utils/imports/components';
import { skillCategories, skillList } from 'utils/imports/data';
import { routingFadeDuration } from 'utils/imports/config';

import 'assets/style/skills.scss';

const openCat = 'lang';
let currentCat;

// preload images to smoothen transitions
let promises = [];
skillList.filter((skill) => skill.type === openCat).forEach((skill) => {
  promises.push(new Promise(function(resolve) {
    let img = new Image()
    img.onload = resolve
    img.src = skill.logo
  }));
});

Promise.all(promises).finally(() => {
  currentCat = skillCategories[0].ident;

  setTimeout(() => {
    skillList.filter((skill) => skill.type !== openCat).forEach((skill) => {
      let img = new Image()
      img.src = skill.logo
    });
  }, 250);
});

function handleCatClick(e) {
  currentCat = e.detail;
}
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-skills" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    {#each skillCategories as cat}
        <SkillsProgressCat catName="{cat.name}" catIdent="{cat.ident}" catOpen={cat.ident === currentCat} on:catOpened="{handleCatClick}" />
    {/each}
    
</div>