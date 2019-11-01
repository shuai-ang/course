// process.stdout.write('hello')

const { Writable } = require('stream');

class CustomStream extends Writable{
	_write(chunk, encoding, callback){
		console.log('chunk ::',chunk)
		console.log('encoding ::',encoding)
		// console.log('callback ::',callback)
		callback()
	}
}

const write = new CustomStream();

write.on('finish',()=>{
	console.log('write done')
})
write.write('world',()=>{
	console.log('write world')
})
write.write('hello')
write.end('abc')