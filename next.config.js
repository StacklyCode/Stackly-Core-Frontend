const nextTranslate = require('next-translate');
const withImages = require('next-images');
const withPWA = require('next-pwa');

module.exports = withPWA(
  nextTranslate(
    withImages({
      future: {
        webpack5: true,
      },
      pwa: {
        dest: 'public',
      },
      webpack: async (config) => {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });

        return config;
      },
    })
  )
);
