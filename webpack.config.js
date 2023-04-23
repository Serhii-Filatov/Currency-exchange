const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    open: true,
  },
  stats: 'minimal',
};
