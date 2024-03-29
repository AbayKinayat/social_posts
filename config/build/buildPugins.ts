import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions):
webpack.WebpackPluginInstance[] {
  const { isDev, paths } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Hello world Webpack',
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(paths.apiUrl),
    }),
  ];

  if (isDev) plugins.push(new ReactRefreshWebpackPlugin());
  if (options.analyze) plugins.push(new BundleAnalyzerPlugin());

  return plugins;
}
