import App from './App.svelte';

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const app = new App({
  target: document.body,
  props: {
    name: 'j0Shi.dev',
    legacy: false,
  },
});

window.app = app;

export default app;
