const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@data': path.resolve(__dirname, 'src/data/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
