// const path = require('path');
// const includePath = path.resolve(__dirname, '..');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
	 {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
			sourceMap: true,
			modules: true,
			localIdentName: '[name]__[local]'
		}
            }, {
                loader: "sass-loader", // compiles Sass to CSS
                options: {
			sourceMap: true
		}
            }]
	}]
  }
};
