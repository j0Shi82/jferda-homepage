import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const resolvePath = (relative) => fileURLToPath(new URL(relative, import.meta.url))

// Bare specifiers like `components/foo.svelte` used to resolve via webpack's
// `resolve.modules: ['src', ...]`; Vite needs them spelled out.
const srcAliases = Object.fromEntries(
  ['assets', 'components', 'config', 'locale', 'router', 'store', 'utils']
    .map((dir) => [dir, resolvePath(`./src/${dir}`)]),
)

export default defineConfig(({ mode }) => ({
  plugins: [
    // preprocessor config lives in svelte.config.js, which the plugin and the
    // IDE language server both load automatically.
    svelte(),
    // Adds the `browser` resolve condition and auto-cleanup; test runs only.
    ...(mode === 'test' ? [svelteTesting()] : []),
  ],
  resolve: {
    alias: srcAliases,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        // SMUI 9 does not export its MDC Sass internals, and those files import
        // each other with extensionless bare specifiers. Vite's own Sass resolver
        // goes through the package exports map and rejects both, so resolve
        // @smui/@material specifiers as plain file paths the way the smui-theme
        // CLI does, and let Sass apply its usual partial/extension rules.
        importers: [{
          findFileUrl(url) {
            if (!url.startsWith('@smui/') && !url.startsWith('@material/')) return null
            return new URL(`./node_modules/${url}`, import.meta.url)
          },
        }],
        // `@use 'variables.scss'`, `@import 'src/assets/style/...'` and bare
        // package imports (@material/*, tippy.js, glightbox) respectively.
        loadPaths: [
          resolvePath('./src/assets/style'),
          resolvePath('.'),
          resolvePath('./node_modules'),
        ],
      },
    },
  },
  define: {
    'process.env.BASEURL': JSON.stringify(
      mode === 'production' ? 'https://j0shi.dev' : 'http://localhost:8080',
    ),
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  server: {
    host: '0.0.0.0',
    port: 8090,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
}))
