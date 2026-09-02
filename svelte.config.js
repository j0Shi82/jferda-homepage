import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

// Lives here rather than inline in vite.config.js so the Svelte language server
// (IDE) picks up the same preprocessor the build uses. vitePreprocess runs
// <style lang="scss"> through Vite's own CSS pipeline (see css.preprocessorOptions
// in vite.config.js) and handles the TypeScript that @smui/* ships in its components.
export default {
  preprocess: vitePreprocess(),
}
