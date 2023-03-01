import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import {buildCssLoaders} from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/webpack',
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif,woff2)$/,
    loader: 'file-loader',
    options: {
      name: () => (isDev ? '[path][name].[ext]' : '[contenthash].[ext]'),
      outputPath: 'images',
    },
  };

  const cssLoaders = buildCssLoaders(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['ru', 'en'],
              keyAsDefaultValue: true,
              outputPath: '/locales/{{locale}}/{{ns}}.json',
            },
          ],
        ],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoaders,
  ];
}
