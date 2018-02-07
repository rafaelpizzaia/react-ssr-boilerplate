const ExtractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src', 'client'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src', 'client', 'styles')],
              },
            },
          ],
        }),
      },
      {
        test: /(png|jpg|ttf)/,
        exclude: /node_modules/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new optimizeCssAssetsWebpackPlugin({
      cssProcessorOptions: { discardComments: {removeAll: true } }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      mangle: false,
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'env': JSON.stringify('production')
    }),
  ],
  devtool: 'source-map'
};
