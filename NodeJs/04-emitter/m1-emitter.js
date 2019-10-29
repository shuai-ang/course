const EventEmitter = require('events');
// console.log(EventEmitter)
/*
const emitter = new EventEmitter();

emitter.on('test',()=>{
	console.log('bind test ..')
})

emitter.emit('test')
*/
class MyEmitter extends EventEmitter{}
const emitter = new MyEmitter();

emitter.on('test',()=>{
	console.log('bind test ..')
})

emitter.emit('test')
