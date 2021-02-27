const LoadablePlugin = require('@loadable/webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  plugins: [new LoadablePlugin()],
  mode,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
