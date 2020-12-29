const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: './js/index.js',
        style: './stylesheets/scss/style.scss',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[id].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
        new FixStyleOnlyEntriesPlugin(),
        // new CopyWebpackPlugin([
        //     {
        //         from: './public',
        //         to: './'
        //     },
        // ]),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new HtmlWebpackPlugin({
        //     template: './html/contact.html'
        // }),
        // new HtmlWebpackPlugin({
        //     template: './html/skill.html'
        // }),
        // new HtmlWebpackPlugin({
        //     template: './html/works.html'
        // }),
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})]
    },
    devServer: {
        contentBase: './',
        watchContentBase: true,
        openPage: "index.html",
        compress: true,
        open: true,
        port: 8888,
        inline: true
    }
};
