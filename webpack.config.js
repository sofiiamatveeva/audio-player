const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./src/styles/vars.scss',
								'./src/styles/mixins.scss',
								'./src/styles/typography.scss'
							],
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	devServer: {
		compress: true,
		port: 4200,
	},
};
