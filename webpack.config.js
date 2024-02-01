const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  //mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer:{
    static:{
      directory:path.join(__dirname,'public'),
    },
    compress:true,
    port:9000,
    open:true
  },
  module: {
    rules: [
        {
          test:/\.css$/,
          use:[MiniCssExtractPlugin.loader,'css-loader']
        }
    ]
},
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
   MiniCssExtractPlugin()
  ],
  
};