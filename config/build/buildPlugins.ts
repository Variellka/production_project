import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import { type BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    apiURL,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiURL),
            __PROJECT__: JSON.stringify(project),
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled',
        }),
    ];
}
