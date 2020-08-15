const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { ProvidePlugin } = require('webpack')

// https://webpack.js.org/guides/code-splitting/
const outputDirectory = 'lib'
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: [/(node_modules)/, /\.test.jsx?$/],
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
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ outputPath: outputDirectory }),
    new ProvidePlugin({
      React: 'React',
      react: 'React',
      'window.react': 'React',
      'window.React': 'React'
      // ReactDOM: 'react-dom'
    })
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
}
