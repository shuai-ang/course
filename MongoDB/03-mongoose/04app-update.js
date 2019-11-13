const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/liyu', {useNewUrlParser: true,useUnifiedTopology: true});

let getRandom = (min,max)=>{
	return Math.round(min+ Math.random()*(max-min))
}
let names = ["Tom","Leo","Amy","Jone","Mike","Jane"];
let majors = ["Computer","Art","Dance","Sing","Sport"];
let getNames = ()=>names[getRandom(0,names.length-1)]
let getMajors = ()=>majors[getRandom(0,majors.length-1)]

var db = mongoose.connection;
db.on('error', function(){
	 console.log('connection error:')
});
db.once('open', function() {
	 console.log('connection success')
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
	//3.根据模型进行数据库操作:CRUD
	/*
	UserModel.updateOne({age:{$lt:30}},{name:'Rain'},(err,docs)=>{
		if(err){
  			console.log(err.message)
  		}else{
  			console.log(docs)
  		}
	})
	*/
	UserModel.updateMany({age:{$lt:30}},{name:'Sera'},(err,docs)=>{
		if(err){
  			console.log(err.message)
  		}else{
  			console.log(docs)
  		}
	})
	UserModel.find({age:{$lt:30}},'name age -_id',(err,docs)=>{
		if(err){
  			console.log(err.message)
  		}else{
  			console.log(docs)
  		}
	})
	
})