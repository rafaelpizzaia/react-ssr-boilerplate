const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

module.exports = function() {
  const env = process.env.NODE_ENV || 'development';

  const webpackConfigPath = path.resolve(__dirname, `webpack.${env}.js`);
  const baseConfig = require(webpackConfigPath);

  const isProduction = env === 'production';

  const clientConfig = {
    entry: './src/client/client.jsx',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    plugins:[
      new cleanWebpackPlugin(['public'], {
        root: path.resolve(__dirname),
        verbose: true
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isProduction ? 'server' : 'disabled',
        openAnalyzer: true,
      }),
    ]
  };

  return merge(baseConfig, clientConfig);
}
