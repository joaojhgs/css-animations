const withImages = require('next-images');

module.exports = withImages({
  basePath: '/css-animations',
  images: {
    disableStaticImages: true,
  },
  output: 'standalone',
  webpack(config) {
    return config;
  },
});