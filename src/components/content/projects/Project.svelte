<script>
import {
  svelteTransitionFade, svelteTransitionFly, svelteLifecycleOnMount,
} from 'utils/imports/svelte';
import { FlyingHeadline, SkillsProgressCat } from 'utils/imports/components';
import { currentRouteName, screenWidth, isDesktopBreakpoint } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages } from 'utils/imports/helpers';
import {
  MaterialList, MaterialListItem, MaterialListGraphic, MaterialListText,
  MaterialImageList, MaterialImageListItem, MaterialImageListAspectContainer, MaterialImageListImage,
} from 'utils/imports/material';
import Div from '@smui/common/Div.svelte';

import logoUn from 'assets/media/images/projects/logo-uncensored.png';

import 'assets/style/project.scss';

let scaleY = null;
let initialized = false;
let routeContainer;
const animationParams = {
  baseDuration: 2000,
  headlineBaseDuration: 1000,
  contentAnimationBaseDuration: 500,
  headlineCount: 4,
  highlightCount: 4,
};
animationParams.headlineDuration = animationParams.headlineBaseDuration / (animationParams.headlineCount - 1);
animationParams.highlightTotalDelay = animationParams.baseDuration;
animationParams.highlightTotalDelay -= animationParams.headlineDuration * 3;
animationParams.highlightTotalDelay -= animationParams.contentAnimationBaseDuration;
animationParams.highlightDelay = animationParams.highlightTotalDelay / (animationParams.highlightCount - 1);

preloadImages([logoUn]);

svelteLifecycleOnMount(() => {
  scaleY = (window.innerHeight - 48) / routeContainer.clientHeight;

  setTimeout(() => {
    scaleY = 1;
    initialized = true;
  }, 3000);
});

let projectIdent;
$: {
  [, projectIdent] = $currentRouteName.split('_');
}
</script>

<div 
  class="jdev-route-project mdc-typography--body1" 
  style="

    transform: scaleY({scaleY});
    transform-origin: top center;

    --jdev-content-animation-duration: 500ms;
  " 
  in:svelteTransitionFade="{{ duration: routingFadeDuration }}"
  class:initialized="{initialized}"
  bind:this="{routeContainer}"
>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div class="jdev-project-banner" style="background-image: url({logoUn});" in:svelteTransitionFade="{{ duration: animationParams.baseTime }}" />
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDirection="{$isDesktopBreakpoint ? ['left', 'left'] : ['left', 'right']}" 
          transitionDuration="{animationParams.headlineDuration}" 
          transitionDelay="{(animationParams.headlineDuration) * 1}"
        />
        <p in:svelteTransitionFly="{{
          x: $screenWidth / (-2),
          duration: animationParams.baseDuration - ((animationParams.headlineDuration) * 2),
          delay: (animationParams.headlineDuration) * 2,
      }}">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDirection="{$isDesktopBreakpoint ? ['right', 'right'] : ['left', 'right']}" 
          transitionDuration="{animationParams.headlineDuration}" 
          transitionDelay="{(animationParams.headlineDuration) * 2}"
        />
        <MaterialList class="jdev-project-highlights" nonInteractive>
          <MaterialListItem style="animation-delay: {(animationParams.highlightDelay * 0) + ((animationParams.headlineDuration) * 3)}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Edit</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {(animationParams.highlightDelay * 1) + ((animationParams.headlineDuration) * 3)}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Send</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {(animationParams.highlightDelay * 2) + ((animationParams.headlineDuration) * 3)}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Archive</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {(animationParams.highlightDelay * 3) + ((animationParams.headlineDuration) * 3)}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Delete</MaterialListText>
          </MaterialListItem>
        </MaterialList>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDuration="{animationParams.headlineDuration}" 
          transitionDelay="{(animationParams.headlineDuration) * 0}"
        />
        <SkillsProgressCat catIdent="lang" catOpen="{true}" slideDelay="{1000}" />
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDuration="{animationParams.headlineDuration}" 
          transitionDelay="{(animationParams.headlineDuration) * 3}"
        />
        <MaterialImageList class="jdev-project-image-list">
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1500ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1550ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1600ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1650ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1700ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1750ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1800ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: 1850ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
        </MaterialImageList>
      </div>
    </div>
  </div>
</div>