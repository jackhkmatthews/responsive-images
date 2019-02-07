module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      autoprefixer: { grid: true },
    },
    'postcss-custom-properties': {},
    cssnano: {},
    'postcss-mixins': {},
  },
};
