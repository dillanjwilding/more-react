const path = require('path')
// const { ProvidePlugin } = require('webpack')
// const DotenvPlugin = require('dotenv-webpack')
// const { LoaderOptionsPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const outputDirectory = 'dist'
module.exports = {
  mode: 'development',
  // devtool: 'inline-source-map', // devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|gif|jpg|jpeg|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images'
          }
        },
        exclude: /node_modules/
      }, {
        test: /\.(eot|ttf|woff2?|otf|svg)$/,
        loaders: ['file-loader']
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    open: false,
    disableHostCheck: true
    // watchContentBase: true
  },
  plugins: [
    // new DotenvPlugin(),
    new CleanWebpackPlugin({ outputPath: outputDirectory }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      manifest: './public/manifest.json'
    })
  ],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react')
    }
  }
}
