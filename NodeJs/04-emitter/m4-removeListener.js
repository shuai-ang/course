const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();

const listener1 = ()=>{
	console.log('test1 ..')
}
const listener2 = ()=>{
	console.log('test2 ..')
}

emitter.on('test',listener1)

emitter.on('test',listener2)

// emitter.off('test',listener1)

emitter.removeListener('test',listener2)
emitter.emit('test')

console.log(emitter.removeListener == emitter.off)