const path = require('path')
const resolve = function (dir) {
	// __dirname当前文件绝对路径
	// path.join() 输出：.(当前目录)
	// path.join('aaa') 输出：aaa
	// path.join('/aaa') 输出：/aaa
	// path.join('../aaa') 输出：../aaa
	// path.join('aaa', 'bbb') 输出：aaa/bbb
	// path.join('../test') 输出：../test
	// path.join(__dirname, '../test) 输出: 当前程序绝对路径/../test
	// path.join(__dirname, '/test') 输出：当前程序绝对路径/test
	// path.join(__dirname, 'test') 输出：当前程序绝对路径/test
	// path.join()为纯拼接函数，当不传参数时，输出'.'；传一个参数时则输出原来的值并且不解析(../)；传多个值时会将多个参数进行拼接，多个参数之间自动加上'/',并自动解析__dirname变量和../上级目录

	// path.resolve() 输出：当前程序绝对路径
	// path.resolve('../') 输出：当前程序绝对路径/../
	// path.resolve(dist, 'img/1.jpg') 输出：当前程序绝对路径/dist/img/1.jpg
	// path.resolve(__dirname, 'aaa', '/bbb', '/ddd') 输出：c:/ddd，忽略了'/ddd'之前的所有参数，并与程序根目录'c:/'拼接
	// path.resolve(__dirname, 'aaa') 输出：当前程序绝对路径/aaa
	// path.resolve()函数会将当前程序的绝对路径与所传参数进行解析拼接，如不传参则输出当前绝对路径。
	// 该函数若接收了一个或多个开头带有'/'字符的参数，则取最后一个带有'/'的字符的参数并忽略他之前的所有参数，与程序根目录(c:、d:)进行拼接，再与他后面的参数进行拼接
	return path.join(__dirname, dir)
}
// process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 显示项目构建后的模块分布情况
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	// production, development
	mode: 'development',
	entry: {
		Home: './src/views/Home/home.js',		//首页
		HomeHeader: './src/views/HomeHeader/header.js',		//首页头部
		HomeNews: './src/views/HomeNews/news.js',		//首页头部
		Flash: './src/views/Flash/flash.js',		//限时抢购
		Resume: './src/views/Resume/resume.js',		//公司介绍
		Activity: './src/views/Activity/activity.js',		//活动专区
		Member: './src/views/Member/member.js',		//活动专区
		test: './src/views/test/test.js',		//商品卡片测试页面
	},
	output: {
		path: resolve('dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		//在开发模式下，项目运行的地址将基于publicPath，http://devServer.host:devServer.port/publicPath/dir   默认''
		//在生产模式下，构建后会用该值代替html中的静态资源引用的相对路径，即静态资源将要部署至线上的位置，
		//该值还决定了通过import()异步加载的静态文件(js,css)的路径，同时决定了css文件中引入的资源路径
		//注意：纯拼接替换，不会语法解析
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				// include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				// 打包html模板文件中img标签的图片
				test: /\.html$/,
				loader: "html-withimg-loader"
			},
			{
				test: /\.(sc|sa|c)ss$/,
				// MiniCssExtractPlugin.loader
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
					loader: "sass-resources-loader",
					options: {
						// resources: [path.resolve('src/assets/css/common/config.scss')]
						resources: ['./src/assets/css/common/config.scss']
					}
				}]
			},
			{
				test: /\.(gif|jpe?g|png|bmp|svg)/,
				use: [{
					loader: 'url-loader', options: {
						limit: 5 * 1024,
						name: 'img/[name].[hash:8].[ext]',
						// publicPath: '/',//将css中引用的背景图片打包到output.path + publicPath + name
						// outputPath: ''
					}
				}]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			}
		]
	},
	devServer: {
		host: '0.0.0.0',
		open: true,
		port: 3000,
		// dev的根目录 = __dirname/contentBase/output.publicPath
		contentBase: './dist',
		hot: true,
		// hotOnly: true, // 即使hot热跟新失败，也不自动刷新浏览器
		overlay: true, // 错误信息显示在页面遮罩上
		// historyApiFallback: true, // react、vue单页面路由需配置
		proxy: {
			// 设置代理
			// proxy all requests starting with /api to jsonplaceholder
			'/api': {
				target: 'http://192.168.0.105/', //真实请求的目标地址
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		},
	},
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			'@': resolve('src'),
			// 'vue$': 'vue/dist/vue.esm.js'
		}
	},
	externals: {
		// 配置了该项后，项目中可以无需引入而直接使用以下配置的模块，改为html中script引入资源
		// 当webpack打包构建时，会跳过以下模块，不对他们进行打包，因为他们是通过cdn线上资源引入的，而非依赖于node_modules里面的模块
		vue: 'Vue',
		'vue-router': 'VueRouter',
		"element-ui": 'ELEMENT',
		axios: 'axios'
	},
	devtool: 'cheap-module-eval-source-map',
	// 当webpack打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。
	// 例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
	// 而其中一个源文件包含一个错误，那么堆栈跟踪就会简单地指向到 bundle.js。
	// 这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。
	// 为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。
	// 如果一个错误来自于 b.js，source map 就会明确的告诉你。
	// https://www.webpackjs.com/configuration/devtool/
	// -------------------------------开发模式
	// eval：映射到webpack转换后的代码，不能显示正确的源代码行数
	// eval-source-map：每个模块使用eval()执行转换的DataUrl，行、列数能够正确映射，它会生成用于开发环境的最佳品质的source map。
	// cheap-eval-source-map：与eval-source-map相似，但不能生成列映射(column mapping)，只是映射行数。它会忽略源自loader的source map。
	// cheap-module-eval-source-map：与cheap-eval-source-map相似，会处理loader的source map。(开发环境推荐使用)
	// -------------------------------特定模式
	// inline-source-map：与source-map引入方式相同，不同的是会转换为DataUrl引入。
	// cheap-source-map：生成独立source map文件并引入，忽略列映射与loader的source map。
	// inline-cheap-source-map：与cheap-source-map相似，生成DataUrl并引入。
	// cheap-module-source-map：没有列映射(column mapping)的 source map，将 loader source map 简化为每行一个映射(mapping)。
	// inline-cheap-module-source-map：与cheap-module-source-map相似，但是source mapp转换为DataUrl添加到bundle中。
	// -------------------------------生产环境
	// none(省略devtool选项)：不生成source map。
	// source-map：生成一个独立可访问的.map映射文件。
	// hidden-source-map：不会为bundle添加引用注释，但仍可通过url访问到.map文件。
	// nosources-source-map：创建的source map不包含sourcesContent(源代码内容)。可映射行数，但无法查看错误源代码。
	plugins: [
		new CleanWebpackPlugin(),
		new vueLoaderPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.resolve('public'),   //将当前目录下的public
				to: 'public',                    //复制到output.path下的public
				ignore: ['.*']
			}
		]),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].chunk.css'
		}),
		new webpack.ProvidePlugin({
			'_': 'lodash', //当模块中使用了_时，会自动引入lodash并赋值给_，因此在模块中无需引入lodash也可以使用
		}),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NamedModulesPlugin()
		// new WebpackBundleAnalyzer()
	],
	optimization: {
		// 开发模式下的Tree Shaking须配置此项。
		usedExports: true,
		// 分割代码块
		// runtimeChunk: {
		//     name: 'manifest'
		// },
		splitChunks: {
			//cacheGroups会继承这个值，小于30kb不分割提取
			// minSize: 0,
			// maxAsyncRequests: 2,//默认5
			// maxInitialRequests: 8,//默认3
			cacheGroups: {
				// 提取src下公共js(小于30kb不会被提取)
				// commons: {
				//     test: /[\\/]src[\\/].+\.js$/,
				//     minChunks: 2,
				//     name: "commons",
				//     chunks: "all",
				//     priority: 10
				// },
				// 提取vue
				// main: {
				//     test: /[\\/]node_modules[\\/]vue[\\/]/,
				//     name: "main",
				//     minChunks: 1,
				//     chunks: "all"
				// },
				// 提取除vue的js，webpack用于解析转换es6的模块会被打包进这个vendor，因此每个页面都要引用
				// vendor: {
				//     test: /[\\/]node_modules[\\/]/,
				//     name: "vendor",
				//     chunks: "all",
				//     enforce: true
				// },
				// 分离reset.scss
				reset: {
					name: 'reset',
					test: /reset\.s?css$/,
					chunks: 'all',
					enforce: true, // 忽略到前面的配置，不管是minSize,maxSize等等。
				},
				// 限时抢购、即将开抢分割公共模块(axios、http.js、骨架屏、商品组件)
				// flashCommons: {
				// 	name: "commons",
				// 	filename: "js/commons/[name].js",
				// 	chunks: "all",
				// 	enforce: true,
				// 	minChunks: 2
				// }
				// 分离axios.js
				// axios: {
				//     name: 'axios',
				//     test: /[\\/]node_modules[\\/]axios[\\/]/,
				//     chunks: 'all',
				//     enforce: true,
				//     priority: 1
				// },
				// vendor: {
				//     name: 'vendor',
				//     test: /[\\/]node_modules[\\/]/,
				//     chunks: 'all',
				//     enforce: true,
				//     priority: 0
				// },
				// 分离http.js
				// http: {
				//     name: "http",
				//     test: /http\.js$/,
				//     chunks: "all",
				//     enforce: true
				// }
			}
		},
	}
}


const pages = [
	{
		template: './src/views/Home/home.html',
		filename: 'home.html',
		chunks: ['reset', 'Home']
	},
	{
		template: './src/views/HomeHeader/header.html',
		filename: 'header.html',
		chunks: ['reset', 'HomeHeader']
	},
	{
		template: './src/views/HomeNews/news.html',
		filename: 'news.html',
		chunks: ['reset', 'HomeNews']
	},
	{
		template: './src/views/Flash/flash.html',
		filename: 'flash.html',
		chunks: ['reset', 'Flash']
	},
	{
		template: './src/views/Resume/resume.html',
		filename: 'resume.html',
		chunks: ['reset', 'Resume']
	},
	{
		template: './src/views/Activity/activity.html',
		filename: 'activity.html',
		chunks: ['reset', 'Activity']
	},
	{
		template: './src/views/Member/member.html',
		filename: 'member.html',
		chunks: ['reset', 'Member']
	},
	{
		template: './src/views/test/test.html',
		filename: 'test.html',
		chunks: ['reset', 'test']
	},
]

function createHtml({ template, filename, chunks }) {
	return new htmlWebpackPlugin({
		template,
		filename,
		chunks,
		// chunksSortMode: 'none'
	})
}
pages.forEach(element => {
	module.exports.plugins.push(createHtml(element))
});



// 疑难杂症：
/**
 * 问题描述：循环依赖
 * 报错提示：UnhandledPromiseRejectionWarning: Error: Cyclic dependency
 * 解决方法：查看入口文件是否循环依赖某一模块，如果没有，可能是某个入口文件中使用了懒加载模块，
 *          其webpackChunkName与其它入口文件中引用的模块名冲突，可在htmlWebpackPlugin中加入chunksSortMode: 'none'配置项进行检查。
 *
 *
 */