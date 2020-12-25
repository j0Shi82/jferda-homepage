import { storeTypeWritable } from 'utils/imports/svelte';

export default {
  currentProject: storeTypeWritable(''),
  projectInitializing: storeTypeWritable(true),
};
