const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  //单一入口
  // entry: './src/index.js',
  //多入口
  entry:{
    index:'./src/index.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name]-[hash]-bundle.js',
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
      //处理图片 
		{
			test: /\.(png|jpg|gif)$/i,
			use: [
		  		{
		    		loader: 'url-loader',
		    			options: {
		      			limit: 10
		    		}
		  		}
			]
		}		   
	   ]
  },
  devServer:{
    contentBase: './dist',//内容的目录
    port:8080//服务运行的端口
  },
  plugins:[
    new htmlWebpackPlugin({
        template:'./src/index.html',//模板文件
        filename:'index.html',//输出的文件名
        // inject:'head',//脚本写在那个标签里,默认是true(在body结束后)
        hash:true,//给生成的js/css文件添加一个唯一的hash
        chunks:['index','about']
    }),
    new CleanWebpackPlugin()
  ]
}