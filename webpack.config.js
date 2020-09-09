const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  mode: process.env.PRODUCTION ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'html/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/audible.html',
      filename: 'audible.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/register-to-vote.html',
      filename: 'register-to-vote.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/registration-status.html',
      filename: 'registration-status.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/ballot-preview.html',
      filename: 'ballot-preview.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/election-reminders.html',
      filename: 'election-reminders.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/commit-to-vote.html',
      filename: 'commit-to-vote.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/voting-squad-captain.html',
      filename: 'voting-squad-captain.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/mail-in-ballot.html',
      filename: 'mail-in-ballot.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/theater-times.html',
      filename: 'theater-times.html',
    }),
    new HtmlWebpackPlugin({
      template: 'html/new-page.html',
      filename: 'new-page.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static', to: 'static' },
      ],
    }),
  ],
};
