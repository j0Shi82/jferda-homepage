<script>
import {
  svelteTransitionFade, svelteLifecycleOnMount, svelteTick,
} from 'utils/imports/svelte';
import {
  ProjectDescription, ProjectKeys, ProjectSkills, ProjectGallery, ProjectLinks,
} from 'utils/imports/components';
import { currentProject } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages, getProjectAnimationParams } from 'utils/imports/helpers';
import { projectList, skillList } from 'utils/imports/data';

import 'assets/style/project.scss';

const animationTotalDuration = 2500;
let currentTimeout = null;

// animation logic
let skillsAnimationParams;
let descAnimationParams;
let keysAnimationParams;
let galleryAnimationParams;

function getSectionAnimationParams(projectData) {
  const skillCount = skillList.filter((el) => el.type === projectData.ident).length;
  const keysCount = projectData.projectPage.keys.length;
  const galleryCount = projectData.projectPage.gallery.length;
  [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ] = getProjectAnimationParams(animationTotalDuration, [skillCount, 1, keysCount, galleryCount]);
  return [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ];
}

// scaling and animations
let projectData;
let scaleY = null;
let initialized = false;
let routeContainer;
let projectContainer;

function scale() {
  initialized = false;
  // scale window to device height and unfold when animations finished
  scaleY = (window.innerHeight - 48) / projectContainer.clientHeight;

  if (currentTimeout) clearTimeout(currentTimeout);
  currentTimeout = setTimeout(() => {
    scaleY = 1;
    initialized = true;
  }, animationTotalDuration + 250);
}

$: {
  [projectData] = projectList.filter((project) => project.ident === $currentProject);
  [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ] = getSectionAnimationParams(projectData);
  preloadImages([projectData.projectPage.titleImage]);
}

$: {
  // using bing:this as onUpdateOnMount service
  // route change => new content gets rendered => projectContainer gets updated => scale gets triggered
  if (projectContainer) {
    scale();
  }
}

// first scaling on page load
svelteLifecycleOnMount(() => {
  scale();
});
</script>

<div 
  class="jdev-route-project mdc-typography--body1" 
  style="transform: scaleY({scaleY}); transform-origin: top center;" 
  in:svelteTransitionFade="{{ duration: routingFadeDuration }}"
  class:initialized="{initialized}"
  bind:this="{routeContainer}"
>
  <!-- eaching through all projects is the only way I've come up with to restart the animation for every project on route change, at least with my current approach to routes -->
  {#each projectList as project}
    {#if project.ident === $currentProject}
    <div class="mdc-layout-grid" bind:this="{projectContainer}">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <div class="jdev-project-banner" style="background-image: url({projectData.projectPage.titleImage});" in:svelteTransitionFade="{{ duration: animationTotalDuration }}" />
        </div>
        <ProjectLinks projectData="{projectData}" animationTotalDuration="{animationTotalDuration}" />
        <ProjectDescription projectData="{projectData}" animationParams="{descAnimationParams}" />
        <ProjectKeys projectData="{projectData}" animationParams="{keysAnimationParams}" />
        <ProjectSkills projectData="{projectData}" animationParams="{skillsAnimationParams}" />
        <ProjectGallery projectData="{projectData}" animationParams="{galleryAnimationParams}" />
      </div>
    </div>
    {/if}
  {/each}
</div>