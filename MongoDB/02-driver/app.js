const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://127.0.0.1:27017';

const dbName = 'it';

// const client = new MongoClient(url,{ useNewUrlParser:true })
const client = new MongoClient(url,{ useUnifiedTopology: true })

client.connect(err=> {
  if(err){
  	console.log('connect db err')
  	throw err
  }
  	console.log('connect db success')
  	const db = client.db(dbName);
  	// console.log(db)
  	const collection = db.collection('user');
  	/*
  	collection.insertMany([{name:"Tom",age:18},{name:"Leo",age:20}],(err,docs)=>{
  		if(err){
  			console.log('insert err::',err)
  		}else{
  			console.log('insert success::',docs)
  		}

  		client.close();
  	})
  	*/
  	/*
  	//查找
  	collection.find({age:{$gt:18}}).toArray((err,docs)=>{
  		if(err){
  			console.log('insert err::',err)
  		}else{
  			console.log('insert success::',docs)
  		}

  		client.close();
  	})
  	*/
  	/*
  	collection.updateOne({name:"Tom"},{$set:{age:28}},(err,docs)=>{
  		if(err){
  			console.log('insert err::',err)
  		}else{
  			console.log('insert success::',docs)
  		}

  		client.close();
  	})
  	*/
  	collection.deleteOne({name:"Tom"},(err,docs)=>{
  		if(err){
  			console.log('delete err::',err)
  		}else{
  			console.log('delete success::',docs)
  		}

  		client.close();
  	})
  
});