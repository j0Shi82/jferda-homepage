// routing
import { getLocalizedRoute } from 'locale/utils/routeHelper';
import getGuards from 'router/utils/getGuards';
import { push, wrap } from 'svelte-spa-router';
import { ChunkGenerator } from 'svelte-spa-chunk';
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte';

// locale
import { _, register, init } from 'svelte-i18n';

const Chunk = ChunkGenerator(ChunkComponent);

export {
  getLocalizedRoute,
  getGuards as getRouteGuards,
  push as routerPush,
  wrap as routeWrapper,
  Chunk as applyCodeSplittingToRoute,
  _ as localize,
  register as registerLocaleDict,
  init as initLocalization,
};
