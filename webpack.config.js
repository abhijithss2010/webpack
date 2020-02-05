const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: "development",
  module:{
    rules:[
       {
          test:/\.(png|jpg)$/,
           use:['file-loader']
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};