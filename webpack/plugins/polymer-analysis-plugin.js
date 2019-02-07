/* eslint-disable no-console */
const { exec } = require('child_process');

class PolymerAnalyzePlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      'Polymer Analyze Plugin',
      (compilation, callback) => {
        const hasJsFiles = Object.keys(compilation.assets).some(filename => {
          return filename.endsWith('.js');
        });

        if (!hasJsFiles) {
          callback();
          return;
        }

        exec(
          './node_modules/.bin/polymer analyze "src/components/**/*.(js|html)"',
          { maxBuffer: 1024 * 1000 },
          (err, stdout) => {
            if (err) {
              compilation.errors.push(new Error(`Polymer Analyze: ${err}`));
              callback();
              return;
            }
            compilation.assets['analysis.json'] = {
              source: () => stdout,
              size: () => stdout.length,
            };
            console.log('Polymer Analyze done!');
            callback();
          },
        );
      },
    );
  }
}

module.exports = PolymerAnalyzePlugin;
