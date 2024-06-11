import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteTesting } from '@testing-library/svelte/vite'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [svelte(), svelteTesting()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils'),
      config: path.resolve(__dirname, 'src/config'),
      locale: path.resolve(__dirname, 'src/locale'),
      store: path.resolve(__dirname, 'src/store'),
    },
  },
})
