const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = function() {
  const env = process.env.NODE_ENV || 'development';
  const folder = env === 'production' ? 'build-prod' : 'build' ;

  const webpackConfigPath = path.resolve(__dirname, `webpack.${env}.js`);
  const baseConfig = require(webpackConfigPath);

  const serverConfig = {
    target: 'node',

    entry: './src/index.js',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, folder),
    },

    plugins: [
      new cleanWebpackPlugin([folder], {
        root: path.resolve(__dirname),
        verbose: true
      }),
    ],

    externals: [webpackNodeExternals()]
  };
  
  return merge(baseConfig, serverConfig);
}
