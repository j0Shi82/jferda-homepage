import { storeTypeWritable } from 'utils/imports/svelte.js'

export default {
	currentProject: storeTypeWritable(''),
	projectInitializing: storeTypeWritable(true),
}
