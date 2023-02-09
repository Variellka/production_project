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
  port: number
}

export interface BuildEnv {
  mode: webpack.Configuration['mode']
  port: number
}
