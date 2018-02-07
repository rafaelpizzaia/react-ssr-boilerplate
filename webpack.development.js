const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

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
            { loader: 'css-loader', options: { importLoaders: 2, modules: true } },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: { includePaths: [path.resolve(__dirname, 'src', 'client', 'styles')] },
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
  ],
};
