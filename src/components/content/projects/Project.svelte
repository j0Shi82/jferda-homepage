<script>
import {
  svelteTransitionFade, svelteTransitionFly, svelteEasingBackOut, svelteLifecycleOnMount,
} from 'utils/imports/svelte';
import { FlyingHeadline } from 'utils/imports/components';
import { currentRouteName, screenWidth } from 'utils/imports/store';
import { routingFadeDuration } from 'utils/imports/config';
import { preloadImages } from 'utils/imports/helpers';

import logoUn from 'assets/media/images/projects/logo-uncensored.png';

import 'assets/style/project.scss';

let scaleY = null;
let transition = '';
let routeContainer;

svelteLifecycleOnMount(() => {
  preloadImages([logoUn]).finally(() => {
    scaleY = (window.innerHeight - 48) / routeContainer.clientHeight;

    setTimeout(() => {
      scaleY = 1;
      transition = 'transition: transform 1s ease-in-out';
    }, 2500);
  });
});

let projectIdent;
$: {
  [, projectIdent] = $currentRouteName.split('_');
}
</script>

<div 
  class="jdev-route-project" 
  style="transform: scaleY({scaleY}) scaleX({scaleY}); transform-origin: top center; {transition}" 
  in:svelteTransitionFade="{{ duration: routingFadeDuration }}"
  bind:this="{routeContainer}"
>
  <div class="mdc-layout-grid">
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <img src="{logoUn}" style="width:100%;" in:svelteTransitionFade="{{ duration: 2000 }}" />
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline localeKey="navigation.projects.nwoun" transitionDuration="{2000}" />
        <p in:svelteTransitionFly="{{
          x: $screenWidth / 2, duration: 1000, delay: 1000, easing: svelteEasingBackOut,
      }}">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 

          {projectIdent}

        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline localeKey="navigation.projects.nwoun" />
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 

          {projectIdent}

        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline localeKey="navigation.projects.nwoun" />
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 

          {projectIdent}

        </p>
      </div>
      <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <FlyingHeadline localeKey="navigation.projects.nwoun" />
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 

          {projectIdent}

        </p>
      </div>
    </div>
  </div>
</div>