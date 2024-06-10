import fs from 'fs'
import { PurgeCSS } from 'purgecss'

const purgeCSSResult = await new PurgeCSS().purge({
	content: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/**/*.js',
		'./node_modules/@smui/**/*.svelte',
		'./node_modules/@smui/**/*.js',
		'./node_modules/@smui/**/*.ts',
		'./node_modules/@material/**/*.js',
		'./node_modules/@material/**/*.ts',
		'./node_modules/glightbox/**/*.js',
	],
	safelist: [/g(lightbox|slide|fade|zoom|loader|overlay|container|close|prev|next|btn)/, /^svelte-/, /^tippy-/, /data-/],
	css: ['./public/*.css'],
})

fs.writeFileSync('./public/smui.css', purgeCSSResult[0].css)
