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
	UserModel.insertMany({
		name:"Tom",
		age:30,
		major:"Dance",
		phone:15456789056
		})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err.message)
	})
	
	BlogModel.insertMany({
		title:"test 2",
		content:"blog for test2",
		author:"5dccca68ccb5731b2cfedce3"
		})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err.message)
	})
	
	UserModel.findOne({name:"Rain"})
	.then(user=>{
		// console.log(user)
		BlogModel.find({author:user._id},(err,docs)=>{
			if(err){
				console.log(err.message)
			}else{
				console.log(docs)
			}
		})
	})
	.catch(err=>{
		console.log(err.message)
	})
	*/
	UserModel.findByPhone(15456789056,(err,docs)=>{
			if(err){
				console.log(err.message)
			}else{
				console.log(docs)
			}
		})
})