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
const animationTotalDuration = 2000;

function getAnimationParams(totalDuration = animationTotalDuration, sectionItems = [7, 1, 4, 8]) {
  const animationParams = [];
  const headlineTotalDuration = totalDuration / 2;
  const headlineSingleDuration = headlineTotalDuration / sectionItems.length;

  sectionItems.forEach((itemCount, i) => {
    let contentIterationDelay;
    let contentSingleDuration;
    if (itemCount === 1) {
      contentSingleDuration = (totalDuration - headlineSingleDuration * (i + 1));
      contentIterationDelay = ((totalDuration - contentSingleDuration) - (headlineSingleDuration * (i + 1)));
    } else {
      contentSingleDuration = (totalDuration - headlineSingleDuration * (i + 1)) / (itemCount * 0.5);
      contentIterationDelay = ((totalDuration - contentSingleDuration) - (headlineSingleDuration * (i + 1))) / (itemCount - 1);
    }

    animationParams.push({
      headline: {
        duration: headlineSingleDuration,
        delay: headlineSingleDuration * i,
      },
      content: {
        duration: contentSingleDuration,
        delay: headlineSingleDuration * (i + 1),
        iterationDelay: contentIterationDelay,
      },
    });
  });

  return animationParams;
}

const [skillsAnimationParams, descAnimationParams, highlightsAnimationParams, galleryAnimationParams] = getAnimationParams();

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

    --jdev-highlights-animation-duration: {highlightsAnimationParams.content.duration}ms;
    --jdev-gallery-animation-duration: {galleryAnimationParams.content.duration}ms;
    --jdev-skills-progress-duration: 1000ms;
  " 
  in:svelteTransitionFade="{{ duration: routingFadeDuration }}"
  class:initialized="{initialized}"
  bind:this="{routeContainer}"
>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div class="jdev-project-banner" style="background-image: url({logoUn});" in:svelteTransitionFade="{{ duration: animationTotalDuration }}" />
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDirection="{$isDesktopBreakpoint ? ['left', 'left'] : ['left', 'right']}" 
          transitionDuration="{descAnimationParams.headline.duration}" 
          transitionDelay="{descAnimationParams.headline.delay}"
        />
        <p in:svelteTransitionFly="{{
          x: $screenWidth / (-2),
          duration: descAnimationParams.content.duration,
          delay: descAnimationParams.content.delay + descAnimationParams.content.iterationDelay * 0,
      }}">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDirection="{$isDesktopBreakpoint ? ['right', 'right'] : ['left', 'right']}" 
          transitionDuration="{highlightsAnimationParams.headline.duration}" 
          transitionDelay="{highlightsAnimationParams.headline.delay}"
        />
        <MaterialList class="jdev-project-highlights" nonInteractive>
          <MaterialListItem style="animation-delay: {highlightsAnimationParams.content.delay + highlightsAnimationParams.content.iterationDelay * 0}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Edit</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {highlightsAnimationParams.content.delay + highlightsAnimationParams.content.iterationDelay * 1}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Send</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {highlightsAnimationParams.content.delay + highlightsAnimationParams.content.iterationDelay * 2}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Archive</MaterialListText>
          </MaterialListItem>
          <MaterialListItem style="animation-delay: {highlightsAnimationParams.content.delay + highlightsAnimationParams.content.iterationDelay * 3}ms;">
            <MaterialListGraphic class="material-icons">star</MaterialListGraphic>
            <MaterialListText>Delete</MaterialListText>
          </MaterialListItem>
        </MaterialList>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDuration="{skillsAnimationParams.headline.duration}" 
          transitionDelay="{skillsAnimationParams.headline.delay}"
        />
        <SkillsProgressCat catIdent="lang" catOpen="{true}" slideDelay="{skillsAnimationParams.content.delay}" />
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline 
          localeKey="navigation.projects.nwoun" 
          transitionDuration="{galleryAnimationParams.headline.duration}" 
          transitionDelay="{galleryAnimationParams.headline.delay}"
        />
        <MaterialImageList class="jdev-project-image-list">
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 0}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 1}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 2}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 3}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 4}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 5}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 6}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
            <MaterialImageListItem>
              <MaterialImageListAspectContainer>
                <MaterialImageListImage component={Div} style="animation-delay: {galleryAnimationParams.content.delay + galleryAnimationParams.content.iterationDelay * 7}ms; background-size: contain; background-image: url({logoUn});" />
              </MaterialImageListAspectContainer>
            </MaterialImageListItem>
        </MaterialImageList>
      </div>
    </div>
  </div>
</div>