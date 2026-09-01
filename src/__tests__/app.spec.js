import { render, screen } from '@testing-library/svelte'
import { expect, it, vi } from 'vitest'
import App from '../App.svelte'

// Guards the app shell end-to-end: module graph resolves, the shell mounts, and
// the locale dictionaries are actually loaded (a bundler that fails to emit them
// still renders a shell, so assert on real dictionary content).
it('mounts the shell and renders content from the locale dictionary', async () => {
  globalThis.IntersectionObserver = vi.fn(() => ({ observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() }))

  render(App)

  expect(await screen.findByRole('banner', {}, { timeout: 5000 })).toBeInTheDocument()
  // literal from src/locale/dict/en.json
  expect(await screen.findByLabelText('Contact Through Mail', {}, { timeout: 5000 })).toBeInTheDocument()
})
