const {injectBabelPlugin} = require('react-app-rewired')
module.exports = function override(config, eve) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}], config);
    return config;
}