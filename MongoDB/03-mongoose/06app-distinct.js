const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/liyu', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', function(){
	 console.log('connection error:')
});
db.once('open', function() {
	 console.log('connection success')
	 
});
var userSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  major:String
	});
var User = mongoose.model('User', userSchema);

User.distinct('major',function(err,docs){
	if(err) throw err;
	console.log(docs)
})