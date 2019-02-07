const { resolve } = require('path');
const merge = require('webpack-merge');
const CreatePackageJsonPlugin = require('./webpack/plugins/create-package-json-plugin');

process.env.distFolder = resolve(__dirname, 'dist', 'components');

const common = require('./webpack.common.js');

const {
  name,
  version,
  description,
  license,
  peerDependencies,
} = require('./package.json');

const newPackageJson = {
  name,
  version,
  description,
  license,
  peerDependencies,
};

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CreatePackageJsonPlugin(newPackageJson)],
});
