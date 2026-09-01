import { fileURLToPath } from 'node:url'
import sveltePreprocess from 'svelte-preprocess'

const resolvePath = (relative) => fileURLToPath(new URL(relative, import.meta.url))

// Lives in svelte.config.js rather than inline in vite.config.js so the Svelte
// language server (IDE) picks up the same preprocessor the build uses.
// svelte-preprocess (not vitePreprocess) because the components rely on its
// `<style global>` support, which vitePreprocess does not implement.
export default {
  preprocess: sveltePreprocess({
    scss: {
      // `@use 'smui-theme'`, `@import 'src/assets/style/...'` and bare package
      // imports respectively.
      includePaths: [
        resolvePath('./src/assets/style'),
        resolvePath('.'),
        resolvePath('./node_modules'),
      ],
    },
  }),
}
