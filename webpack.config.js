const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/test.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: "babel-loader"
        }
      ]
    }
};