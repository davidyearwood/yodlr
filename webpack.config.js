const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    register: './src/register-app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: "babel-loader",
        }
      ]
    }
};