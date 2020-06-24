<script>
import { onMount } from 'svelte';
import Fab, { Label } from '@smui/fab';
import tippy from 'tippy.js';
import 'tippy.js/animations/shift-away.css';

import satisfactionImage from 'assets/media/images/home/heros/satisfaction.jpg';
import communityImage from 'assets/media/images/home/heros/community.jpg';
import artImage from 'assets/media/images/home/heros/art.jpg';
import progressiveImage from 'assets/media/images/home/heros/progressive.jpg';
import litImage from 'assets/media/images/home/heros/lit.jpg';

import store from 'store/index';
// store and config values we need
const { activePhilosophyButtonIndex } = store.about;

const homeHeros = [
  {
    image: satisfactionImage,
    headline: 'Satisfaction',
    text: 'Within an app or project, there\'s not much you won\'t be able to do. That\'s why coding is a constant reward system that just keeps on giving, because you\'re operating in a world in which pretty much all problems are solvable.',
  },
  {
    image: communityImage,
    headline: 'Community',
    text: 'Participating in the open-source community is a great way to drive change, stay open-minded, and yield great results thanks to collective intelligence.',
  },
  {
    image: artImage,
    headline: 'Creativity',
    text: 'Nobody would compare coding to classic art. But why? Devs are able to create software out of thin air just using their imagination and creativity.',
  },
  {
    image: progressiveImage,
    headline: 'Progressive',
    text: 'Coding is a field of constant change. It leads to innovation, cutting edge technology, and with the proper ideas even helps making the world a better place for everyone.',
  },
  {
    image: litImage,
    headline: 'Lit',
    text: 'The term \'nerdy\' is no longer a contemporary label for developers. The new generation is a modern, open-minded, and social bunch. We do still consume energy drinks though.',
  },
];

let el;
export let id = 0;

onMount(() => {
  tippy(el, {
    content: homeHeros[id].text,
    animation: 'shift-away',
    placement: 'top',
    offset: [0, 0],
  });
});
</script>

<div on:click="{() => { activePhilosophyButtonIndex.set(id); }}" class="jdev-fab-wrapper" class:active="{id === $activePhilosophyButtonIndex}" bind:this="{el}">
    <Fab extended ripple="false" color="primary"><span class="background" style="background-image: url({homeHeros[id].image});"></span><Label>{homeHeros[id].headline}</Label></Fab>
</div>