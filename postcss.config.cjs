const autoprefixer = require('autoprefixer')
const postcssDiscardDuplicates = require('postcss-discard-duplicates')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
  process.env.NODE_ENV === 'production'
    ? purgecss({
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
    })
    : () => {},
  autoprefixer(),
  postcssDiscardDuplicates,
]

module.exports = {
  plugins,
}
