const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { env } = require('yargs').argv;
const package = require('./package.json');

const isProduction = env === 'prod';
const libraryName = package.name;

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './lib/src/index.ts',
  devtool: 'inline-source-map',
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       uglifyOptions: {
  //         ecma: 8,
  //         compress: {
  //           warnings: false,
  //         },
  //       },
  //     }),
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    library: libraryName,
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'lib/package.json', to: '' },
      { from: 'lib/*.md', to: '', flatten: true },
      { from: 'LICENSE', to: '' },
    ]),
    new TypedocWebpackPlugin(
      {
        name: 'DHIS2 Period',
        mode: 'file',
        out: '../docs',
        theme: 'default',
        includeDeclarations: false,
        ignoreCompilerErrors: true,
      },
      './lib'
    ),
  ],
};
