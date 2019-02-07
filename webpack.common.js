const { resolve, join } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    babelrc: true,
    extends: join(__dirname + '/.babelrc'),
    cacheDirectory: true,
  },
};

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    components: './src/components.js',
  },
  output: {
    path: process.env.distFolder,
    filename: '[name].bundle.js',
  },
  devtool: 'none',
  resolve: {
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-html|@polymer)\/).*/,
        use: [babelLoader],
      },
      {
        test: /styles\.js$/,
        exclude: /node_modules/,
        use: [
          babelLoader,
          {
            loader: resolve('./webpack/loaders/js-template-style-loader.js'),
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(process.env.distFolder),
    new CopyWebpackPlugin([
      {
        from: './assets/**/*',
        to: process.env.distFolder,
        context: './src',
      },
    ]),
  ],
};
