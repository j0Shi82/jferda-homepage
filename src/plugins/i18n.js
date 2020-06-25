import { addMessages, init } from 'svelte-i18n';
import en from 'locale/en.json';

export default () => {
  addMessages('en', en);

  init({
    fallbackLocale: 'en',
    initialLocale: 'en',
  });
};
