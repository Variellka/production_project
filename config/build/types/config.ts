import type webpack from 'webpack';

// webpack.Configuration["mode"] - "none" | "development" | "production";

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: webpack.Configuration['mode']
  paths: BuildPaths
  isDev: boolean
  port: number,
  analyze: boolean
}

export interface BuildEnv {
  analyze: boolean;
  mode: webpack.Configuration['mode']
  port: number
}
