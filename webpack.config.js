import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  stats: {
    children: true,
    excludeModules: /node_modules/,
  },
  entry: {
    app: resolve('./src/client/index.jsx')
  },
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./Public/index.html'),
      inject: false,
    }),
    // new BundleAnalyzerPlugin()
  ],
};
