var path = require('path');

process.env.NODE_ENV = 'testing';

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['mocha'],
		files: [{pattern: 'test/**/*.test.js', watched: false, included: true, served: true}],
		preprocessors: {
			'src/**/*.js': ['webpack', 'sourcemap', 'coverage'],
			'test/**/*.js': ['webpack', 'sourcemap']
		},
		webpack: { //kind of a copy of your webpack config
			devtool: 'inline-source-map', //just do inline source maps instead of the default
			module: {
				loaders: [
					{
						test: /\.js$/,
						loaders: ['babel?' + JSON.stringify({presets: ['es2015', 'react', 'stage-0', 'stage-1', 'stage-2']}), 'isparta'],
						exclude: path.resolve(__dirname, 'node_modules')
					},
					{
						test: /\.json$/,
						loader: 'json'
					},
                    {
                        test: /\.scss$/i,
                        loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=Cal__[name]__[local]!postcss!sass?sourceMap']
                    }
				]
			},
			externals: {
				'cheerio': 'window',
				'react/addons': true,
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			}
		},
		webpackServer: {
			noInfo: true //please don't spam the console when running in karma!
		},
		babelPreprocessor: {
			options: {
				presets: ['airbnb']
			}
		},
		reporters: ['progress', 'coverage'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	})
};
