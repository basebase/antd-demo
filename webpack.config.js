const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve('./src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", "react"]
          }
        }
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolveLoader: {
      modules: [
        'node_modules',
      ],
  },
};
