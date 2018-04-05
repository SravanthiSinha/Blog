const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Holberton School webpack', template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  watchOptions: {
    poll: 1000
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(png|jp(e*)g|svg|gif|ico)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};
