<script>
import { svelteLifecycleOnMount } from 'utils/imports/svelte';
import { localize } from 'utils/imports/core';
import { GlideSlider } from 'utils/imports/plugins';
import { MaterialChip, MaterialChipText, MaterialIconButton } from 'utils/imports/material';

let glideEl;
let glide;
let glideIndex = 0;

svelteLifecycleOnMount(() => {
  glide = new GlideSlider(glideEl, {
    type: 'slider',
    rewind: false,
  }).mount();

  glide.on('move.after', () => {
    glideIndex = glide.index;
  });
});
</script>

<div class="glide" bind:this="{glideEl}">
    <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
        <li class="glide__slide">{$localize('about.bio.bio1')}</li>
        <li class="glide__slide">{$localize('about.bio.bio2')}</li>
        <li class="glide__slide">{$localize('about.bio.bio3')}</li>
        </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <MaterialIconButton class="material-icons glide-left {glideIndex > 0 ? '' : 'hidden'}" data-glide-dir="<">chevron_left</MaterialIconButton>
        <MaterialIconButton class="material-icons glide-right {glideIndex < 2 ? '' : 'hidden'}" data-glide-dir=">">chevron_right</MaterialIconButton>
    </div>
    <div class="jdev-glide-page">
        <MaterialChip><MaterialChipText>{glideIndex + 1} / 3</MaterialChipText></MaterialChip>
    </div>
</div>