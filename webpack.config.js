// webpack.config.js
'use strict';

const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = {
    entry: {
        'abc': './src/main.js'
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        }, ['abc.js'])
    ]
};