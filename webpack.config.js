var p = require('path');
var webpack = require('webpack');
var BUILD_DIR = p.resolve(__dirname, 'src/client/public');
var APP_DIR = p.resolve(__dirname, 'src/client/app');

let defaults = {
    output: { path: BUILD_DIR, filename: 'bundle.js' },
    entry: APP_DIR + '/index.jsx',
    module : { rules : [ { test : /\.jsx?/, include : APP_DIR, loader : 'babel-loader' } ] },
    resolveLoader: { modules: ['node_modules', p.resolve(__dirname, 'loaders')] }
};

module.exports = function (content) {
    let dd = defaults;
    dd.module.rules.push({ test : /index\.jsx/,  loader: "preload", options: {} });
    return dd;
};