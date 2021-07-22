<script>
import { svelteLifecycleOnMount } from 'utils/imports/svelte';
import { FlyingHeadline } from 'utils/imports/components';
import {
  MaterialImageList, MaterialImageListItem, MaterialImageListAspectContainer, MaterialImageListImage,
} from 'utils/imports/material';
import Div from '@smui/common/Div.svelte';
import { Lightbox } from 'utils/imports/plugins';

export let projectData = {};
export let animationParams = {
  headline: {
    duration: 0,
    delay: 0,
  },
  content: {
    duration: 0,
    delay: 0,
    iterationDelay: 0,
  },
};

// init lightbox
let lightbox;
let scrollTop = 0;
svelteLifecycleOnMount(() => {
  lightbox = Lightbox({
    onClose: () => {
      document.querySelector('#main-content').scrollTo(0, scrollTop);
      // document.querySelector('.jdev-project-image-list').scrollIntoView();
    },
    openEffect: 'none',
    closeEffect: 'none',
    elements: projectData.projectPage.gallery.map((el) => ({
      href: el.full,
      type: 'image',
      title: el.title,
      description: el.description,
    })),
  });
});

function openGallery(i) {
  scrollTop = document.querySelector('#main-content').scrollTop;
  lightbox.openAt(i);
}

// --jdev-gallery-animation-duration is required to pass the animation time to the material component
// see project.scss for corresponding style
// there might be a smarter way to dynamically set a css value on a third-party component, but it'll do for now
</script>

<div 
    class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
    style="--jdev-gallery-animation-duration: {animationParams.content.duration}ms;"
>
    <FlyingHeadline 
    localeKey="project.gallery" 
        transitionDuration="{animationParams.headline.duration}" 
        transitionDelay="{animationParams.headline.delay}"
    />
    <MaterialImageList class="jdev-project-image-list">
        {#each projectData.projectPage.gallery as item, i}
        <MaterialImageListItem>
            <MaterialImageListAspectContainer>
            <MaterialImageListImage src="{item.thumb}" component={Div} style="animation-delay: {animationParams.content.delay + animationParams.content.iterationDelay * i}ms; background-size: contain; background-image: url({item.thumb});" on:click="{() => { openGallery(i); }}" />
            </MaterialImageListAspectContainer>
        </MaterialImageListItem>
        {/each}
    </MaterialImageList>
</div>