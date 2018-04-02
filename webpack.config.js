const { resolve } = require('path')

module.exports = {
  entry: {
    monorail: resolve(__dirname, 'src')
  },
  output: {
    path: resolve(__dirname, 'dist', 'components'),
    library: 'monorail',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(png|jp(e*)g|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8000, // Convert images < 8kb to base64 strings
          name: 'images/[hash]-[name].[ext]'
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'postcss-loader'],
    }],
  }
}