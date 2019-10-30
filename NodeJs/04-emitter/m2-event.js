const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();
/*
emitter.addListener('test',()=>{
	console.log('test1 ..')
})

emitter.on('test',()=>{
	console.log('test2 ..')
})

emitter.emit('test')
console.log(emitter.addListener == emitter.on)
*/
/*
emitter.once('test',()=>{
	console.log('test1 ..')
})

emitter.once('test',()=>{
	console.log('test2 ..')
})

emitter.emit('test')
emitter.emit('test')
*/
emitter.setMaxListeners(11)
emitter.on('test',()=>{
	console.log('test1 ..')
})
emitter.on('test',()=>{
	console.log('test2 ..')
})
emitter.on('test',()=>{
	console.log('test3 ..')
})
emitter.on('test',()=>{
	console.log('test4 ..')
})
emitter.on('test',()=>{
	console.log('test5 ..')
})
emitter.on('test',()=>{
	console.log('test6 ..')
})
emitter.on('test',()=>{
	console.log('test7 ..')
})
emitter.on('test',()=>{
	console.log('test8 ..')
})
emitter.on('test',()=>{
	console.log('test9 ..')
})
emitter.on('test',()=>{
	console.log('test10 ..')
})
emitter.on('test',()=>{
	console.log('test11 ..')
})

emitter.emit('test')