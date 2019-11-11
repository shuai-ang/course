const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://127.0.0.1:27017';

// const client = new MongoClient(url,{ useNewUrlParser:true })
const client = new MongoClient(url,{ useUnifiedTopology: true })

client.connect(err=> {
  if(err){
  	console.log('connect db err')
  	throw err
  }
  	console.log('connect db success')
  client.close();
});