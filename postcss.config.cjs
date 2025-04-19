const autoprefixer = require('autoprefixer')
const postcssDiscardDuplicates = require('postcss-discard-duplicates')
const purgecss = require('@fullhuman/postcss-purgecss')

// https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env

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
        safelist: [
          /g(lightbox|slide|fade|zoom|loader|overlay|container|close|prev|next|btn)/, /^svelte-/,
          /^tippy-/, /data-/,
          /mdc-top-app-bar/,
          /mdc-switch/,
          /mdc-fab/,
          /mdc-drawer/,
          /mdc-form-field/,
          /mdc-list/,
          /mdc-deprecated-list/,
          /mdc-icon-button/,
          /mdc-image-list/,
          /mdc-linear-progress/,
          /mdc-chips/,
          /mdc-card/,
          /mdc-tab/,
          /mdc-paper/,
        ],
      })
    : () => {},
  autoprefixer(),
  postcssDiscardDuplicates,
]

module.exports = {
  plugins,
}
