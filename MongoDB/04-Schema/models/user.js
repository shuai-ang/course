const mongoose = require('mongoose');
//1.定义文档模型
 var UserSchema = new mongoose.Schema({
	  name:{
	  	type:String,
	  	required:[true,"必须输入用户名"],
	  	minlength:[3,"最小长度不小于三位"],
	  	maxlength:[6,"最大长度不超过六位"]
	  },
	  age:{
	  	type:Number,
	  	min:[20,"最小年龄不小于20岁"],
	  	max:[60,"最大年龄不超过60岁"]
	  },
	  major:{
	  	type:String,
	  	required:[true],
	  	enum:["Computer","Art","Dance"]
	  },
	  isAdmin:{
	  	type:Boolean
	  },
	  phone:{
	  	type:Number,
	  	validate:{
	  		validator:function(val){
	  			return /1[35789]\d{9}/.test(val)
	  		},
	  		message:"手机号不符合要求"
	  	}
	  },
	  createAt:{
	  	type:Date,
	  	default:Date.now
	  },
	  friends:{
	  	type:Array
	  }
	});
 //定义实例方法
 UserSchema.methods.getBlogs = function(callback){
 	// console.log(this)
 	this.model('blog').find({author:this._id},callback)
 }

//定义静态方法
UserSchema.statics.findByPhone = function(val,callback){
	// console.log(val)
	this.findOne({phone:val},callback)
}


 //2.根据文档模型生成对应集合
 //2.1第一个参数就是需要生成的集合名称，mongoose会将集合名称转化为复数
 //2.2第二个参数就是前面定义的模型
var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;