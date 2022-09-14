/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');
const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = [
  purgecss({
    content: [
      './src/**/*.html',
      './src/**/*.svelte',
      './src/**/*.js',
      './node_modules/@smui/**/*.svelte',
      './node_modules/@smui/**/*.js',
      './node_modules/@material/**/*.js',
      './node_modules/glightbox/**/*.js',
    ],
    safelist: ['glightbox-clean', 'glightbox-body', 'glightbox-container', 'glightbox-slider', 'gslide', 'gfadeIn', 'gfadeOut', 'gslideOutLeft', 'gslideInLeft', 'gslideOutRight', 'gslideInRight', 'gzoomIn', 'gzoomOut', 'gloader'],
  }),
  autoprefixer(),
  postcssDiscardDuplicates,
];

module.exports = {
  plugins,
};
