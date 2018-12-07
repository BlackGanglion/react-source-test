var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

module.exports = {
  devtool: 'inline-source-map',

  performance: {
    hints: false,
  },

  entry: {
    app: './src/app',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: [
        'babel-loader?cacheDirectory'
      ],
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    stats: {
      chunks: false,
    },
    host: "127.0.0.1",
    port: 8080
  },
};
