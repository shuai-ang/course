const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/liyu', {useNewUrlParser: true,useUnifiedTopology: true});

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
	var user = new UserModel({ name: 'Silence',age:18,major:'Dance' });
	user.save((err,docs)=>{
		if(err){
  			console.log('insert err::',err.message)
  		}else{
  			console.log('insert success::',docs)
  		}
	})
	*/
	/*
	UserModel.find({name:'Silence'},(err,docs)=>{
		if(err){
  			console.log('find err::',err.message)
  		}else{
  			console.log('find success::',docs)
  		}
	})
	*/
	/*
	UserModel.updateOne({name:'Silence'},{$set:{age:24}},(err,docs)=>{
		if(err){
  			console.log('update err::',err.message)
  		}else{
  			console.log('update success::',docs)
  		}
	})
	*/

	UserModel.deleteOne({name:'Silence'},(err,docs)=>{
		if(err){
  			console.log('deleteOne err::',err.message)
  		}else{
  			console.log('deleteOne success::',docs)
  		}
	})
});
