const path = require('path');
module.exports = {
	entry: './index.es6.js',
	output: './bundle/index.js',
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	}
}
