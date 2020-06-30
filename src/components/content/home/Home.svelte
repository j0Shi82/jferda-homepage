<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { HomeRoutes } from 'utils/imports/components';
import { routingFadeDuration } from 'utils/imports/config';

const knowledgeLogoSet = ['vue', 'svelte', 'javascript', 'php', 'wordpress', 'docker', 'node', 'git'];
let currentKnowledgeLogoIndex = 0;
let colorClass = knowledgeLogoSet[currentKnowledgeLogoIndex];
$: {
  colorClass = knowledgeLogoSet[currentKnowledgeLogoIndex];
}

setInterval(() => {
  if (knowledgeLogoSet[currentKnowledgeLogoIndex + 1]) currentKnowledgeLogoIndex += 1;
  else currentKnowledgeLogoIndex = 0;
}, 3000);

import 'assets/style/home.scss';
</script>

<div class="jdev-route-home" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-knowledge-logo">
            {#each knowledgeLogoSet as logo, i}
              {#if currentKnowledgeLogoIndex === i}<div class="{logo}"></div>{/if}
            {/each}
          </div>
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-typography--headline5 jdev-intro-text {colorClass}">
            Hey, my name is <b>Janosch</b>. I'm a <b>full-stack web developer</b> from Germany with a focus on creating performant and modern <b>Javascript</b> applications. Explore this website to learn more about my <b>philosophy</b> and my <b>work</b>.
          </div>
          <HomeRoutes colorClass="{colorClass}" />
        </div>
    </div>
</div>