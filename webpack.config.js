const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new StylelintPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
        ],
      },
      {},
    ],
  },
  stats: 'minimal',
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
      }),
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
};
