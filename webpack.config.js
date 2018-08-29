/* eslint-env node */
const webpack = require('webpack');
const path = require('path');

const EXAMPLES_PATH = path.join(__dirname, 'examples');
const LIB_PATH = path.join(__dirname, 'dist');

const resultConfig = {
    mode: 'development',

    context: EXAMPLES_PATH,

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react-bootstrap-form': path.join(LIB_PATH, '')
        }
    },

    module: {
        rules: [{
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }, {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }, {
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
            }],
        },
        { test: /\.ts$/, use: [{ loader: 'ts-loader', options: { configFile: 'webpack.tsconfig.json' }}] },
        { test: /\.tsx$/, use: [
            // { loader: 'babel-loader!ts-loader', options: { configFile: 'webpack.tsconfig.json' }},
            { loader: 'babel-loader' },
            { loader: 'ts-loader', options: { configFile: 'webpack.tsconfig.json' }},
        ] }, {
            test: /\.ts$/,
            enforce: 'pre',
            loader: 'tslint-loader',
            options: {
                emitErrors: true,
                fix: false,
                tsConfigFile: 'webpack.tsconfig.json'
            }
        }]
    },

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    },

    watch: true,

    devtool: 'source-map'
};

module.exports = [
    { name: 'basic', path: 'basic', entry: '/js/index.jsx' },
].map((m) => Object.assign({}, resultConfig, {
    name: m.name,
    entry: `./${m.path}${m.entry}`,
    output: {
        path: path.resolve(EXAMPLES_PATH, `${m.path}/dist`),
        filename: "[name].js",
        library: '[name]',
        libraryTarget: 'this'
    },
}));
