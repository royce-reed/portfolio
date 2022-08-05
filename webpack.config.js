import path, { fileURLToPath } from 'url';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';



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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./Public/index.html'),
      inject: false,
    }),
  ],
};
