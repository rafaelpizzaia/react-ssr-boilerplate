const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const cleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

module.exports = function() {
  const env = process.env.NODE_ENV || 'development';
  const isProduction = env === 'production';
  const folder = isProduction ? 'public-prod' : 'public' ;

  const webpackConfigPath = path.resolve(__dirname, `webpack.${env}.js`);
  const baseConfig = require(webpackConfigPath);

  const clientConfig = {
    entry: './src/client/client.jsx',

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, folder),
    },
    plugins:[
      new cleanWebpackPlugin([folder], {
        root: path.resolve(__dirname),
        verbose: true
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: isProduction ? 'static' : 'disabled',
        openAnalyzer: true,
      }),
    ]
  };

  return merge(baseConfig, clientConfig);
}
