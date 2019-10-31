const { Writable } = require('stream');

class CustomStream extends Writable{
	_write(chunk, encoding, callback){

	}
}

const write = new CustomStream();
write.write()