const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
//const prodMode = process.env.NODE_ENV === 'production';
const entrydir = 'src';
const productdir = 'dist';
module.exports = {
    entry: {
        app: path.resolve(__dirname, entrydir + '/index.js'),
        //app: './' + entrydir + '/index.js',
        style: './' + entrydir + '/style.js'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                //test: /\.(scss)$/,
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader, options: {
                        sourceMap: true}
                    
                    //'style-loader', // inject CSS to page
                }, {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        } // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        sourceMap: true,
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
        ],
        
    },
    
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
   /* output: {
        //filename: '[name].bundle.js',
        //path: path.resolve(__dirname, 'dist'),
        path: __dirname + '/dist',
        publicPath: './',
        filename: 'bundle.js'
    },*/
    output: {
        publicPath: devMode ? '/' : './',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, productdir)
    },
    devtool: false,
    //devtool: "source-map",
    plugins: [
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            favicon: entrydir + '/images/favicon16x16.png',
            template: path.resolve(__dirname, entrydir + '/index.html'),
            filename: 'index.html',
            //template: 'src/index.html'
        }),
    ],
    optimization: {
        //minimize: devMode ? false: true,
        // splitChunks: {
        //     chunks: 'all'
        // },
        minimizer: [
            new TerserJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    devServer: {
        host: '127.0.0.1',
        //disableHostCheck: true,
        noInfo: true,
        historyApiFallback: true,
        disableHostCheck: true,
        //contentBase: path.join(__dirname, productdir),
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 9000
    }
};