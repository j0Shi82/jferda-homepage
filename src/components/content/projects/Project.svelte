<script>
import {
  svelteTransitionFade, svelteLifecycleOnMount,
} from 'utils/imports/svelte';
import {
  ProjectDescription, ProjectKeys, ProjectSkills, ProjectGallery, ProjectLinks,
} from 'utils/imports/components';
import { currentRouteName } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages, getProjectAnimationParams } from 'utils/imports/helpers';
import { projectList, skillList } from 'utils/imports/data';

import 'assets/style/project.scss';

const animationTotalDuration = 2500;
// get projectIdent and data for the project
let projectIdent;
let projectData;
let skillsAnimationParams;
let descAnimationParams;
let keysAnimationParams;
let galleryAnimationParams;
$: {
  [, projectIdent] = $currentRouteName.split('_');
  [projectData] = projectList.filter((project) => project.ident === projectIdent);
  preloadImages([projectData.projectPage.titleImage]);

  // animation logic
  const skillCount = skillList.filter((el) => el.type === projectData.ident).length;
  const keysCount = projectData.projectPage.keys.length;
  const galleryCount = projectData.projectPage.gallery.length;
  [
    skillsAnimationParams, descAnimationParams, keysAnimationParams, galleryAnimationParams,
  ] = getProjectAnimationParams(animationTotalDuration, [skillCount, 1, keysCount, galleryCount]);
}

// scale window to device height and unfold when animations finished
let scaleY = null;
let initialized = false;
let routeContainer;
svelteLifecycleOnMount(() => {
  scaleY = (window.innerHeight - 48) / routeContainer.clientHeight;

  setTimeout(() => {
    scaleY = 1;
    initialized = true;
  }, animationTotalDuration + 250);
});
</script>

<div 
  class="jdev-route-project mdc-typography--body1" 
  style="transform: scaleY({scaleY}); transform-origin: top center;" 
  in:svelteTransitionFade="{{ duration: routingFadeDuration }}"
  class:initialized="{initialized}"
  bind:this="{routeContainer}"
>
  <div class="mdc-layout-grid">
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
</div>