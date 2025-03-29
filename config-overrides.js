/* eslint-disable no-param-reassign */
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);

  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom': '@hot-loader/react-dom',
    '@src': path.resolve(__dirname, 'src'),
  };

  return config;
};
