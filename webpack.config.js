/* eslint-disable global-require */
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fs = require('fs');
const {ModuleFederationPlugin} = require('webpack').container;

const {NODE_ENV, PORT} = process.env;

const isProduction = NODE_ENV === 'production';

const {dependencies} = require('./package.json');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean)
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  {
    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
    type: 'asset/resource'
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline'
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    title: require('./package.json').description,
    favicon: 'public/favicon.png',
    hash: true
  }),
  new Dotenv(),
  new ModuleFederationPlugin({
    name: 'form_builder',
    filename: 'remoteEntry.js',
    exposes: {
      './FormBuilder': './src/components/FormBuilder',
      './Select': './src/components/Select',
      './TextField': './src/components/TextField',
      './state': './src/state'
    },
    shared: {
      react: {singleton: true, requiredVersion: dependencies.react},
      'react-dom': {singleton: true, requiredVersion: dependencies['react-dom']},
      'react-redux': {singleton: true, requiredVersion: dependencies['react-redux']}
    }
  })
];

const buildAlias = () => {
  const alias = {'@root': __dirname};
  const directories = fs.readdirSync(path.resolve(__dirname, 'src'));
  directories.forEach(dir => {
    const directory = path.resolve(__dirname, 'src', dir);
    if (fs.statSync(directory).isDirectory()) {
      alias[`@${dir}`] = directory;
    }
  });
  return alias;
};

module.exports = () => {
  if (!isProduction) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  return {
    devtool: isProduction ? false : 'source-map',
    entry: './index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins,
    resolve: {
      alias: buildAlias()
    },
    module: {rules},
    optimization: {
      splitChunks: false
    },
    devServer: {
      open: true,
      port: PORT,
      compress: true,
      client: {
        overlay: true,
        progress: true
      },
      hot: true,
      historyApiFallback: true
    }
  };
};
