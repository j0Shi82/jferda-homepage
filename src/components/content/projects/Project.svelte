<script>
import {
  svelteTransitionFade, svelteLifecycleOnMount, svelteLifecycleOnDestroy,
} from 'utils/imports/svelte';
import { currentProject, animationsActive, projectInitializing } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages, getProjectAnimationParams } from 'utils/imports/helpers';
import { projectList, skillList } from 'utils/imports/data';
// components
import ProjectDescription from 'components/content/projects/ProjectDescription.svelte';
import ProjectKeys from 'components/content/projects/ProjectKeys.svelte';
import ProjectSkills from 'components/content/projects/ProjectSkills.svelte';
import ProjectGallery from 'components/content/projects/ProjectGallery.svelte';
import ProjectLinks from 'components/content/projects/ProjectLinks.svelte';
import Loader from 'components/utilities/atoms/Loader.svelte';

import 'assets/style/project.scss';

let animationTotalDuration = $animationsActive ? 1500 : 0;
$: animationTotalDuration = $animationsActive ? 1500 : 0;
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
  ] = getProjectAnimationParams(animationTotalDuration, $animationsActive, [skillCount, 1, keysCount, galleryCount]);
  return [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ];
}

// scaling and animations
let projectData;
let scaleY = 1;
let initialized = false;
let loading = true;
let routeContainer;
let projectContainer;

function load() {
  loading = true;
  initialized = false;
  const images = [];
  const [data] = projectList.filter((project) => project.ident === $currentProject);
  const projectSkills = skillList.filter((el) => el.type === $currentProject);
  images.push(data.projectPage.titleImage);
  images.push(...data.projectPage.gallery.map((image) => image.thumb));
  images.push(...projectSkills.map((skill) => skill.logo));
  preloadImages(images).finally(() => {
    loading = false;
  });
}

function scale() {
  if ($animationsActive) {
    initialized = false;
    // scale window to device height and unfold when animations finished
    scaleY = (window.innerHeight - 96) / projectContainer.clientHeight;

    if (currentTimeout) clearTimeout(currentTimeout);
    currentTimeout = setTimeout(() => {
      scaleY = 1;
      initialized = true;
      projectInitializing.set(false);
    }, animationTotalDuration + 250);
  }
}

$: {
  [projectData] = projectList.filter((project) => project.ident === $currentProject);
  [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ] = getSectionAnimationParams(projectData);
  load();
}

$: {
  // using bing:this as onUpdateOnMount service
  // route change => new content gets rendered => projectContainer gets updated => scale gets triggered
  if (routeContainer) {
    scale();
  }
}

// first scaling on page load
svelteLifecycleOnMount(() => {
  load();
});

// destroy timer so that different project routes do not overlap
svelteLifecycleOnDestroy(() => {
  if (currentTimeout) clearTimeout(currentTimeout);
});
</script>

{#if loading}
<div class="jdev-route-project-loader" in:svelteTransitionFade="{{ duration: routingFadeDuration }}">
  <Loader />
</div>
{:else}
<div 
  class="jdev-route-project mdc-typography--body1" 
  style="transform: scaleY({scaleY});" 
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
        {#if projectData.projectPage.gallery.length > 0}
        <ProjectGallery projectData="{projectData}" animationParams="{galleryAnimationParams}" />
        {/if}
      </div>
    </div>
    {/if}
  {/each}
</div>
{/if}