const mongoose = require('mongoose');
const moment = require('moment');
const UserModel = require('./models/user.js')
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
	UserModel.insertMany({name:"Jone",age:50,major:"Sing"})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log(err.message)
	})
	*/
	UserModel.findOne({_id:'5dcbddce06da1c33800ad1dd'})
	.then(data=>{
		// console.log(data.createAt.toLocaleString())
		console.log(moment(data.createAt).format('YYYY - MM - DD HH:mm:ss'))
	})
	.catch(err=>{
		console.log(err.message)
	})
})