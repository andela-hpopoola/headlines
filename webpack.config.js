const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!bootstrap-sass/assets/javascripts/bootstrap.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new ExtractTextPlugin('public/style.css', {
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new Dotenv({
      // path: './.env', // Path to .env file (this is the default)
      // safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
