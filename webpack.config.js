const path = require('path');
const webpack = require('webpack');
module.exports = {
    //需要打包的js文件.
    entry:{
        index:'./src/index.js',
    },
    //输出文件名及目录
    output: {
        path:path.resolve(__dirname,'./release'),
        filename: 'bundle.js'
    },
    mode:'development',//设置mode（开发/生产）
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                use:'babel-loader'
            }
        ]
    }
}