<script>
    import store from 'store/index';
    import { createEventDispatcher, onMount } from 'svelte';
    import Typed from 'typed.js';

    // store values we need
    const { transitionsActive } = store.home;

    const dispatch = createEventDispatcher();

    onMount(() => {
      if ($transitionsActive) {
        const options = {
          strings: [
            'Hey, my name is <b>Janosch</b>. I\'m a <b>full-stack web developer</b> from Germany with a focus on creating performant and modern <b>Javascript</b> applications. Explore this website to learn more about my <b>philosophy</b> and my <b>work</b>.',
          ],
          typeSpeed: 28,
          showCursor: false,
          onComplete: () => {
            dispatch('typewriter:done', true);
          },
        };
        const typed = new Typed('.jdev-typedjs', options);
      }
    });
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

.jdev-typewriter {
  font-family: 'Source Code Pro', monospace;
  text-align: center;
}
</style>

{#if $transitionsActive}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-typewriter jdev-typedjs"></div>
{:else}
<div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12 jdev-typewriter">
    Hey, my name is <b>Janosch</b>. I'm a <b>full-stack web developer</b> from Germany with a focus on creating performant and modern <b>Javascript</b> applications. Explore this website to learn more about my philosophy and my work.
</div>
{/if}