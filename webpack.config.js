const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const sveltePreprocess = require('svelte-preprocess');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
  entry: {
    bundle: ['./src/main.js'],
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    modules: ['src', 'node_modules'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|svelte)$/,
        exclude: /node_modules\/(?!svelte)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: sveltePreprocess({
              postcss: true,
            }),
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|svg|ttf|webp)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: false,
              implementation: require('sass'),
              sassOptions: {
                includePaths: [
                  './src/assets/style',
                  './node_modules',
                ],
              },
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new Visualizer({
      filename: './statistics.html',
    }),
    new HtmlWebpackPlugin({
      title: '>_ j0Shi.dev --help',
      template: './src/index.template.html',
    }),
  ],
  devtool: prod ? false : 'source-map',
  target: 'web',
};
