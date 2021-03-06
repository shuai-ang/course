const mongoose = require('mongoose');
//1.定义文档模型
 var BlogSchema = new mongoose.Schema({
	  title:{
	  	type:String
	  },
	  content:{
	  	type:String
	  },
	  author:{
	  	type:mongoose.Schema.Types.ObjectId,
	  	ref:"user"
	  }
	});

//定义静态方法
BlogSchema.statics.findBlogs = function(query){
	return this.findOne(query).populate('author','name age')
}

 //2.根据文档模型生成对应集合
 //2.1第一个参数就是需要生成的集合名称，mongoose会将集合名称转化为复数
 //2.2第二个参数就是前面定义的模型
var BlogModel = mongoose.model('blog', BlogSchema);

module.exports = BlogModel;