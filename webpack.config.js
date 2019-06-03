const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
  	entry: {
     	index: './src/index.js',
     	news: './src/news_api.js'
   	},
   	devtool: 'inline-source-map',
   	devServer: {
     	contentBase: './dist'
   	},
   	/*plugins: [
   		new CleanWebpackPlugin(),
     	new HtmlWebpackPlugin({
       		title: 'Development'
     	})
   	],*/
  	output: {
    	filename: '[name].app.js',
    	path: path.resolve(__dirname, 'dist')
  	},
  	module: {
	    rules: [
	      	{
		        test: /\.css$/,
		        use: [
		          	'style-loader',
		          	'css-loader'
	        	]
	      	},
	      	{
         		test: /\.(png|svg|jpg|gif)$/,
         		use: [
           			'file-loader'
          		]
        	}
		]
	}
};