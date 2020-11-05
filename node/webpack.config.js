import HtmlWebPackPlugin from 'html-webpack-plugin';
import path from 'path';

module.exports = {
  entry: './01_node_http_express/src/cors.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:5000',
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './01_node_http_express/src/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
