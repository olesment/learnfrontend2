const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
  //mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean:true
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
        },
        {
          test:/\.s[ca]ss$/,
          use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        }
    ]
},
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
   new MiniCssExtractPlugin()
  ],
  
};