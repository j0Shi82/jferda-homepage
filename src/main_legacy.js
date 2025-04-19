// polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'intersection-observer'

import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'j0shi.dev',
    legacy: true,
  },
})

window.app = app

export default app
