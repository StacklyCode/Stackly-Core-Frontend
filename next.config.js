const nextTranslate = require('next-translate')
const withImages = require('next-images')

module.exports = nextTranslate(
  withImages({
    images: {
      domains: ['images.pexels.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
  })
)
