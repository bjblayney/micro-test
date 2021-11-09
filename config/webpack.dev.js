const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: 'index.html',
    },
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productTable',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductTable': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
