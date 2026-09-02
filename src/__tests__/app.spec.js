import { render, screen } from '@testing-library/svelte'
import { beforeEach, expect, it, vi } from 'vitest'
import App from '../App.svelte'
import Skills from 'components/content/skills/Skills.svelte'
import { setupLocalization } from 'utils/imports/core'

beforeEach(() => {
  // jsdom implements neither, and the components construct them unguarded
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // preloadImages() only settles on img.onload, which jsdom never fires
  globalThis.Image = class {
    set src(value) {
      this.value = value
      setTimeout(() => this.onload && this.onload(), 0)
    }

    get src() {
      return this.value
    }
  }
})

// Guards the app shell end-to-end: module graph resolves, the shell mounts, and
// the locale dictionaries are actually loaded (a bundler that fails to emit them
// still renders a shell, so assert on real dictionary content).
it('mounts the shell and renders content from the locale dictionary', async () => {
  render(App)

  expect(await screen.findByRole('banner', {}, { timeout: 5000 })).toBeInTheDocument()
  // literal from src/locale/dict/en.json
  expect(await screen.findByLabelText('Contact Through Mail', {}, { timeout: 5000 })).toBeInTheDocument()
})

// The SMUI tab bar takes its tabs as a snippet. Passing it the wrong shape fails
// at runtime only -- the build stays green while the whole route renders empty.
it('renders the skills route including its tab bar', async () => {
  setupLocalization()
  const { container } = render(Skills)

  await vi.waitFor(() => expect(container.querySelectorAll('.mdc-tab').length).toBeGreaterThan(0), { timeout: 8000 })
}, 15000)
