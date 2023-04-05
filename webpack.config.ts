import path from 'path';
import webpack from 'webpack';
import { BuildPaths, BuildMode, BuildEnv } from './config/build/types/config';
import { buildWebpackoConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;
  const analyze = env.analyze || 0;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const isDev = mode === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    apiUrl,
  };

  const config: webpack.Configuration = buildWebpackoConfig({
    mode,
    port: PORT,
    paths,
    isDev,
    analyze,
  });

  return config;
};
