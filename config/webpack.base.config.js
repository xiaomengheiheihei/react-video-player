'use strict'

const path = require('path');
const webpack = require('webpack')
const srcDir = path.resolve(__dirname, '../src');
const resolve = dir => path.join(__dirname, '../', dir)

module.exports = {
    entry: {
        index: './src/index.js' 
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js', // 输出文件
        libraryTarget: 'umd', // 采用通用模块定义
        // library: 'typeOf', // 库名称
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
    },
    devtool: '#source-map',
    resolve: {              // 默认设置
        modules: [srcDir, 'node_modules'],
        alias: {
            // "@" : `${srcDir}`
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.css|\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                // include: [srcDir]
            },
            {
                enforce: "pre",
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                }
            },
            {
                test: /\.js|\.jsx$/,
                use : 'babel-loader',
                include : [srcDir]   
            },
            {
                test: /\.eot|woff|woff2|ttf|svg$/,
                use: 'file-loader',
                include: [srcDir] 
            },
            {
                test : /\.jpg|png|gif$/,
                use : 'url-loader?limit=25000',
                include : [srcDir]
            }
        ]
    }
}