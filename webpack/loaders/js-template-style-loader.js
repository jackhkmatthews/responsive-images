const fs = require('fs');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

module.exports = function(source) {
  const callback = this.async();
  const regExp = /<style>(.*?)<\/style>/gs;
  const ctx = { parser: true, map: 'inline' };
  const matches = source.match(regExp);

  postcssrc(ctx)
    .then(({ plugins }) => {
      const file = fs
        .readFileSync('./src/components/shared-styles.js')
        .toString('utf-8');
      const styles = file
        .match(/<style>(.*?)<\/style>/gs)
        .map(match => match.replace(/<\/?style>/g, ''))
        .join('');

      const processedMatches = (source.match(regExp) || []).map(match => {
        const css = `${styles} ${match.replace(/<\/?style>/g, '')}`;
        return postcss(plugins).process(css);
      });

      Promise.all(processedMatches)
        .then(results => {
          results.forEach((result, i) => {
            const style = `<style>${result.css}</style>`;
            source = source.replace(matches[i], style);
          });
          callback(null, source);
        })
        .catch(error => callback(error));
    })
    .catch(error => callback(error));
};
