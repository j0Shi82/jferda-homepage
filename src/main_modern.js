import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'j0Shi.dev',
    legacy: false,
  },
});

window.app = app;

export default app;
