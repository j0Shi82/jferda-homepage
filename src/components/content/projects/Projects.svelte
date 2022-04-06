<script>
import { svelteTransitionFade } from 'utils/imports/svelte';
import { routingFadeDuration } from 'utils/imports/config';
import { projectList } from 'utils/imports/data';
// components
import ProjectsCard from 'components/content/projects/ProjectsCard.svelte';
import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';

import 'assets/style/projects.scss';
</script>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-projects" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
    <FlyingHeadline localeKey="navigation.routes.projects" />
    <div class="mdc-layout-grid__inner">
        {#each projectList as project, i}
            <ProjectsCard i="{i}" project="{project}" />
        {/each}
    </div>
</div>
  