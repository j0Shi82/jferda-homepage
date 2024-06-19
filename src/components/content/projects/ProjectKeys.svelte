<script>
  import { localize } from 'utils/imports/core'
  import { isDesktopBreakpoint } from 'utils/imports/store'
  // material
  import List, { Item, PrimaryText, SecondaryText, Text } from '@smui/list'
  // components
  import FlyingHeadline from 'components/utilities/atoms/FlyingHeadline.svelte'

  export let projectData = {}
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
  }

    // --jdev-highlights-animation-duration is required to pass the animation time to the material component
    // see project.scss for corresponding style
    // there might be a smarter way to dynamically set a css value on a third-party component, but it'll do for now
</script>

<div
  class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone"
  style="--jdev-highlights-animation-duration: {animationParams.content.duration}ms;"
>
  <FlyingHeadline
    localeKey="project.highlights"
    transitionDirection={$isDesktopBreakpoint ? ['right', 'right'] : ['left', 'right']}
    transitionDuration={animationParams.headline.duration}
    transitionDelay={animationParams.headline.delay}
  />
  <List class="jdev-project-highlights" threeLine nonInteractive>
    {#each projectData.projectPage.keys as key, i}
      <Item style="animation-delay: {animationParams.content.delay + animationParams.content.iterationDelay * i}ms;">
        <span class="material-icons mdc-deprecated-list-item__graphic">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none"
            ><path d="M0 0h24v24H0z" fill="none" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg
          >
        </span>
        <Text>
          <PrimaryText>{$localize(key.primaryTextLocaleKey)}</PrimaryText>
          <SecondaryText>{$localize(key.secondaryTextLocaleKey)}</SecondaryText>
          <SecondaryText>{$localize(key.secondSecondaryTextLocaleKey)}</SecondaryText>
        </Text>
      </Item>
    {/each}
  </List>
</div>
