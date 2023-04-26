const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const { CleanWebpackPlugin } = require( "clean-webpack-plugin" );
const { EsbuildPlugin } = require( "esbuild-loader" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const CssMinimizerPlugin = require( "css-minimizer-webpack-plugin" );
const StylelintPlugin = require( "stylelint-webpack-plugin" );
const webpack = require( "webpack" );

const path = require( "path" );

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve( __dirname, "./dist" )
  },
  devServer: {
    static: {
      directory: path.join( __dirname, "/" )
    },
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new StylelintPlugin(),
    new webpack.ProvidePlugin( {
      $: "jquery",
      jQuery: "jquery"
    } )
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
          minify: true
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "@babel/preset-env" ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
      {
        test: /\.css$/i,
        include: path.resolve( __dirname, "src" ),
        use: [ "style-loader", "css-loader", "postcss-loader" ]
      }
    ]
  },
  stats: "minimal",
  optimization: {
    minimizer: [
      new EsbuildPlugin( {
        target: "es2015",
        css: true
      } ),
      new CssMinimizerPlugin()
    ],
    minimize: true
  }
};
