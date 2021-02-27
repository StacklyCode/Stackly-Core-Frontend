/* eslint-disable @typescript-eslint/no-var-requires */
const withReactSvg = require('next-react-svg');
const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const withPWA = require('next-pwa');
const localeSubpaths = {};

module.exports = withPWA(
  withReactSvg({
    include: path.resolve(__dirname, 'src/assets/icons'),
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
      localeSubpaths,
    },
    pwa: {
      dest: 'public',
    },
  })
);
