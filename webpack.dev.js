const { resolve } = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PolymerAnalyzePlugin = require('./webpack/plugins/polymer-analysis-plugin');

process.env.distFolder = resolve(__dirname, 'dist', 'docs');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    demo: './src/demo.js',
  },
  mode: 'development',
  devServer: {
    contentBase: process.env.distFolder,
  },
  plugins: [
    new PolymerAnalyzePlugin(),
    new HtmlWebpackPlugin({
      template: './src/demo/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './demo/**/*',
        to: process.env.distFolder,
        context: './src',
      },
    ]),
  ],
});
