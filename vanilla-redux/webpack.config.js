const { resolve } = require('path');

const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  target: ['web', 'es5'],
  entry: resolve(__dirname, './src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/index.html'),
    }),
    new HotModuleReplacementPlugin({}),
  ],
  module: {
    rules: [],
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
};

module.exports = config;
