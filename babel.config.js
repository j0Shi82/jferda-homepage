const isTest = process.env.NODE_ENV === 'test';
const target = process.env.TARGET || 'modern';
const isLegacy = target === 'legacy';

const configTest = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

const configModern = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        targets: { esmodules: true },
      },
    ],
  ],
};

const configLegacy = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
};

let config = {};
if (isTest) config = configTest;
else if (isLegacy) config = configLegacy;
else config = configModern;

module.exports = config;
