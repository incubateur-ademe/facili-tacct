const path = require('path');
const { override, babelInclude, addBabelPreset } = require('customize-cra');

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      babelInclude(     
      path.resolve('src'),       
      path.resolve('../../../common'),     
     addBabelPreset('@emotion/babel-preset-css-prop'),
    )(config, env),
  ));
};