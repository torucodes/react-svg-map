/* eslint-disable no-unused-vars */
/*eslint-env node*/
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
	return {
		entry: ['regenerator-runtime/runtime.js', './examples/src/index.jsx'],
		output: {
			path: path.resolve(__dirname, 'examples/dist'),
			filename: 'index.js',
		},
		performance: {
			hints: false // Disable assets limit
		},
		module: {
			rules: [{
				//test: /\.jsx?/,
				test: /\.(jsx|js)?$/,
				exclude: /node_modules\/(?!tedious)/,
				use: [
					'babel-loader',
					//{
					//	loader: 'eslint-loader',
					//	options: {
					//		emitWarning: options.mode === 'development', // Avoid to block compilation when ESLint error
					//	}
					//}
				],
			}, {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}, {
				test: /\.html$/,
				exclude: /node_modules/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}]
			}]
		},
		resolve: {
			extensions: ['.json', '.js', '.jsx'],
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './examples/src/index.html',
				filename: './index.html'
			}),
			//'@babel/plugin-transform-typescript'
		]
	};
};
