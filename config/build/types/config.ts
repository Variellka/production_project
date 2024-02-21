import type webpack from 'webpack';

// webpack.Configuration["mode"] - "none" | "development" | "production";

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string,
  locales: string,
  buildLocales: string
}

export interface BuildOptions {
  mode: webpack.Configuration['mode']
  paths: BuildPaths
  isDev: boolean
  port: number,
  analyze: boolean,
  apiURL: string,
  project: 'storybook' | 'frontend' | 'jest'
}

export interface BuildEnv {
  analyze: boolean;
  mode: webpack.Configuration['mode']
  port: number,
  apiURL: string
}
