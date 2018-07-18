var path = require('path');//hash chunkhash区别 hash是不变的，chunkhash是每次打包内容改变而随之改变
var htmlWebpackPlugin=require('html-webpack-plugin');
var webpack = require('webpack'),
    precss       = require('precss'),
    autoprefixer = require('autoprefixer');
//module include 指定打包范围
//postcss-loader 后处理css文件加前缀
//autoprefixer 配合postcss使用
//style-loader  把css放进index文件中
//css-loader   把整理并生成css
//file-loader 处理图片文件 没有参数limit
//html-loader   处理html
//less-loader   处理less文件
//ejs-loader   处理ejs文件
//sass-loader   处理sass文件
//url-loader   处理文件 图片 有参数limit 限制图片大小，在范围内打包成base64位，超出正常http请求
//img-webpack-loader 
module.exports={
	context:__dirname,
	entry:'./src/app.js',
	output:{
		path: path.resolve(__dirname, './dist'),
		filename:'js/[name].[chunkhash].js'
	},
	module:{
		loaders:[
		    {
		    	test:/\.js$/,
		    	loader:'babel-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src'),
		    	query:{
		    		presets:['latest']
		    	}
		    },{
		    	test:/\.css$/,
		    	loader:'style-loader!css-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
		    },{
				test:/\.less$/,
		    	loader:'style-loader!css-loader!less-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
		    },{
				test:/\.html$/,
		    	loader:'html-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
		    },{
				test:/\.ejs$/,
		    	loader:'ejs-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
		    },{
				test:/\.sass$/,
		    	loader:'style-loader!css-loader!sass-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
		    },{
				test:/\.(png|jpg|gif|svg)$/i,
		    	loader:'url-loader',
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src'),
		    	query:{
		    		limit:200000,
		    		name:'assets/[name]-[hash:5].[ext]'
		    	}
		    }
		]
	},

	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'index.html',
			inject:'body',
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
		})
	]
}