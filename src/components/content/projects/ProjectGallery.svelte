<script>
import { svelteLifecycleOnMount } from 'utils/imports/svelte';
import Div from '@smui/common/elements/Div.svelte';
// plugins
import GLightbox from 'glightbox';
// material
import ImageList, {
  Item as ImageListItem, ImageAspectContainer, Image as ImageListImage,
} from '@smui/image-list/styled';
// components
import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte';

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
  lightbox = GLightbox({
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
    <ImageList class="jdev-project-image-list">
        {#each projectData.projectPage.gallery as item, i}
        <ImageListItem>
            <ImageAspectContainer>
            <ImageListImage src="{item.thumb}" component={Div} style="animation-delay: {animationParams.content.delay + animationParams.content.iterationDelay * i}ms; background-size: contain; background-image: url({item.thumb});" on:click="{() => { openGallery(i); }}" />
            </ImageAspectContainer>
        </ImageListItem>
        {/each}
    </ImageList>
</div>