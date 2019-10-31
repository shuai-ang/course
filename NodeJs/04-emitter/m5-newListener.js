const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

emitter.on('newListener',(eventName,callback)=>{
	// console.log('execute newListener')
	console.log(eventName)
	callback && callback()
})

// emitter.emit('newListener')

emitter.on('test',()=>{
	console.log('test ..')
})

emitter.on('show',()=>{
	console.log('show ..')
})