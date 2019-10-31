const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('test',(arg1,arg2)=>{
	// console.log('test1 ..')
	console.log(arg1,arg2)
})


// emitter.emit('test','aa','bb')

const arr = ['11','22'];
// emitter.emit('test',...arr)
emitter.emit('test',arr)