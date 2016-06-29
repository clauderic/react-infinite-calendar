var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;
var minify = Boolean(argv.minify);
var outputName = 'react-infinite-calendar';
var plugins = {
    default: [
        new ExtractTextPlugin('../../styles.css')
    ],
    minify: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            mangle: false
        }),
        new ExtractTextPlugin('../../styles.min.css')
    ]
}

module.exports = {
    devtool: (minify) ? 'source-map' : null,
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist/umd'),
        filename: (minify) ? outputName + '.min.js' : outputName + '.js',
        library: 'InfiniteCalendar',
        libraryTarget: 'umd'
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-addons-css-transition-group': 'var React.addons.CSSTransitionGroup',
        'react-addons-shallow-compare': 'var React.addons.shallowCompare'
    },
    plugins: (minify) ? plugins.minify : plugins.default,
    resolve: {
		extensions: ['', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
				test: /(\.scss|\.css)$/,
				loader: ExtractTextPlugin.extract('style', 'css?-minimize&modules&importLoaders=1&localIdentName=Cal__[name]__[local]!postcss!sass?output=nested'),
                include: path.join(__dirname, 'src')
            }
        ]
    },
    postcss: [autoprefixer]
}
