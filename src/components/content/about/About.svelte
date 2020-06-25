<script>
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import AboutPhilosophyButton from 'components/content/about/AboutPhilosophyButton';
import Glide from '@glidejs/glide';
import IconButton from '@smui/icon-button';
import Chip, { Text } from '@smui/chips';
import config from 'config/index';

import store from 'store/index';
// store and config values we need
const { open: isMenuOpen } = store.app.menu;

import 'assets/style/about.scss';

let glideEl;
let glide;
let glideIndex = 0;

onMount(() => {
  glide = new Glide(glideEl, {
    type: 'slider',
    rewind: false,
  }).mount();

  glide.on('move.after', () => {
    glideIndex = glide.index;
  });
});

// need this so glide updates properly when toggling menu
// because unfortunately is doesn't react to the changed div width
// it's a bit of a crook, but works...
$: {
  if ($isMenuOpen || !$isMenuOpen) {
    if (glide) glide.update();
  }
}
</script>

<style lang="scss">
.mdc-typography--headline6 {
  text-align: center;
  border-bottom: 1px solid #000;
}
</style>

<div class="mdc-layout-grid mdc-typography--body1 jdev-route-about" in:fade="{{ duration: config.app.router.routingFadeDuration }}">
  <h2 class="mdc-typography--headline6">Bio</h2>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
      <div class="glide" bind:this="{glideEl}">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">Driven by things that I needed and couldn't find elsewhere, I have been coding since 1997. For most of my life I was labeling coding a hobby. But in reality that 'hobby' often consumed more time than all other activities combined. That's why, when I got stuck in life and needed to make a decision about my future, I decided to finally turn my passion into a profession.</li>
            <li class="glide__slide">Although I surely had to get used to doing in a professional environment what I have been doing for much of my life, it was a smooth transition. It just felt natural and I'm glad I made that choice. I got into web development because most of my work had been web apps anyway. But more than that I had always been fascinated by the amount of possibilities the web offers. It has never been easier to connect with people and show your work to the world.</li>
            <li class="glide__slide">Over the years I naturally touched many areas of development. The first code I've ever written was in Visual Basic before trying (and failing at) C. Then my focus for years were web apps based on PHP/SQL (back end) and plain HTML/CSS (front end). The infamous jQuery library then got me into JavaScript and currently it's most of what I'm doing. This surely isn't the end of the road however and I'm eager to learn what's next and evolve as developer and person.</li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <IconButton class="material-icons glide-left {glideIndex > 0 ? '' : 'hidden'}" data-glide-dir="<">chevron_left</IconButton>
          <IconButton class="material-icons glide-right {glideIndex < 2 ? '' : 'hidden'}" data-glide-dir=">">chevron_right</IconButton>
        </div>
        <div class="jdev-glide-page">
          <Chip><Text>{glideIndex + 1} / 3</Text></Chip>
        </div>
      </div>
    </div>
  </div>
  <h2 class="mdc-typography--headline6">Things I Like About Coding</h2>
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-fab-buttons" style="text-align: center; display: flex; justify-content: space-evenly; align-items: center;">
      <AboutPhilosophyButton id="0" />
      <AboutPhilosophyButton id="1" />
      <AboutPhilosophyButton id="2" />
      <AboutPhilosophyButton id="3" />
      <AboutPhilosophyButton id="4" />
    </div>
  </div>
</div>