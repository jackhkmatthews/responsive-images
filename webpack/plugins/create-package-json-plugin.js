/* eslint-disable no-console */

class CreateFilePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'CreateFilePlugin',
      (compilation, callback) => {
        const json = JSON.stringify(this.packageJson, null, 2) + '\n';
        compilation.assets['package.json'] = {
          source: () => json,
          size: () => json.length,
        };

        callback();
      },
    );
  }

  constructor(packageJson) {
    this.packageJson = packageJson;
  }
}

module.exports = CreateFilePlugin;
