const path = require('path');

module.exports = {
  entry: './src/index.js',
  ouput: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loaders: ['babel'],
      }
    ]
  }
};
