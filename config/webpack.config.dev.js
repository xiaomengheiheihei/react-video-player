'use strict';

const path = require('path');
const baseConfig = require('./webpack.base.config')

module.exports = Object.assign(baseConfig, {
    devtool : 'eval',
    devServer : {
        hot : true,
        port : 8010,
        compress: true,
        contentBase : path.resolve(__dirname, '../dist'),
        publicPath : '/',
    }
})