const mongoose = require('mongoose');
const moment = require('moment');
const UserModel = require('./models/user.js')
const BlogModel = require('./models/blog.js')
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
	 
	//3.根据模型进行数据库操作:CRUD
	/*
	BlogModel.findOne({title:"test 1"})
	.then(data=>{
		// console.log(data)
		let result = {};
		result.data = data;
		UserModel.findById(data.author,(err,user)=>{
			if(err){
				console.log(err.message)
			}else{
				// console.log(user)
				result.user = user;
				console.log(result)
			}
		})
	})
	.catch(err=>{
		console.log(err.message)
	})
	
	BlogModel.findOne({title:"test 1"})
	.populate('author','name age -_id')
	.then(data=>{
		console.log(data)
		
	})
	.catch(err=>{
		console.log(err.message)
	})
	*/
	BlogModel.findBlogs({title:"test 1"})
	.then(data=>{
		console.log(data)
		
	})
	.catch(err=>{
		console.log(err.message)
	})
})