var path = require('path');//hash chunkhash区别 hash是不变的，chunkhash是每次打包内容改变而随之改变
var htmlWebpackPlugin=require('html-webpack-plugin');
// require('style-loader!css-loader!./style.css'); 使css不报错
//module include 指定打包范围
//postcss-loader 后处理css文件加前缀
//autoprefixer postcss-import 配合postcss使用
//style-loader  把css放进index文件中
//css-loader   把整理并生成css
//file-loader 处理图片文件 没有参数limit
//html-loader   处理html
//less-loader   处理less文件
//ejs-loader   处理ejs文件
//sass-loader   处理sass文件
//url-loader   处理文件 图片 有参数limit 限制图片大小，在范围内打包成base64位，超出正常http请求
//img-webpack-loader 压缩图片
//
//new webpack.ProvidePlugin({
//     $: "jquery",
//     jQuery: "jquery",
//     "window.jQuery": "jquery"
// }))  当模块使用这些变量的时候,wepback会自动加载。（区别于window挂载)
// new webpack.NoErrorsPlugin(),  不显示错误插件
// new webpack.optimize.DedupePlugin(),  查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
// new webpack.optimize.UglifyJsPlugin(),  丑化js 混淆代码而用
// new webpack.optimize.CommonsChunkPlugin('common.js')  提取公共代码的插件--config 指定配置打包文件到webpack.dev.config.js --progress显示打包进度过程 --display-modules显示打包模块 --colors显示打包颜色 --display-reasons显示打包原因"
// 
// 
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "web": "webpack --watch --config webpack.config.js --progress --display-modules --colors --display-reasons",
//   "webcopy": "webpack --watch --config webpack.dev.config.js --progress --display-modules --colors --display-reasons"
// },
// --config 指定配置打包文件到webpack.dev.config.js --progress显示打包进度过程 --display-modules显示打包模块 --colors显示打包颜色 --display-reasons显示打包原因"
// 
// //context上下文的意思，根目录
//hash chunkhash区别 hash是不变的，chunkhash是每次打包内容改变而随之改变
// var htmlWebpackPlugin=require('html-webpack-plugin');//用途是事实打包index.html到dist中index中引用的js实时改变与其打包文件名一致
//htmlWebpackPlugin可以传参template：index.html指定到外层的index.html中
//removeComments 删除注释
//collapseWhitespace 除去空格
//chunks:引用只对自己有用的js
//excludeChunks:引用除什么之外的js
//inject:生成的js放在html什么位置
//
//
//{
// 	test:/\.(png|jpg|gif|svg)$/i,
// 	loader:'url-loader',
// 	exclude:path.resolve(__dirname,'/node_modules'),
// 	include:path.resolve(__dirname,'src'),
// 	query:{
// 		limit:200000,
// 		name:'assets/[name]-[hash:5].[ext]'
// 	}
// }
// 
// 
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
		    	use:['style-loader','css-loader',{
					loader:'postcss-loader',
			    	options:{
				     	plugins:[require('postcss-import'),require('autoprefixer')],
				     	browser:['last 5 versions']
			        } 
		    	}],
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
		    	loaders:[
		    	'url-loader?limit=6&name=assets/[name]-[hash:5].[ext]',
		    	'image-webpack-loader'],
		    	exclude:path.resolve(__dirname,'/node_modules'),
		    	include:path.resolve(__dirname,'src')
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