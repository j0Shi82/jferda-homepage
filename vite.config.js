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
