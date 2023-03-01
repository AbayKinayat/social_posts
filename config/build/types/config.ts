export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  port: number,
  isDev: boolean,
  analyze: number
}

export interface BuildEnv {
  port?: number,
  mode?: 'development' | 'production'
  analyze?: number
}
