const mongoose = require('mongoose');
//1.定义文档模型
 var UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  major:String
	});
 //2.根据文档模型生成对应集合
 //2.1第一个参数就是需要生成的集合名称，mongoose会将集合名称转化为复数
 //2.2第二个参数就是前面定义的模型
var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;