const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
  },
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js',
    assetModuleFilename: 'assets/fonts/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
    }),
    new HtmlWebpackPlugin({
      filename: 'card.html',
      template: path.resolve(__dirname, 'src', 'card.html'),
      //favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new EslingPlugin({ extensions: 'ts' }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')], //автопрефиксы для браузеров
              },
            },
          },
          'sass-loader',
        ],
        // generator: {
        //   filename: "assets/[name][ext]",
        // },
      },
      {
        test: /\. (woff2?|ttf|svg)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: "fonts/[name][ext]",
        // },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg|ico)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
    ],
  },
};
