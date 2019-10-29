const t1 = setTimeout(()=>{
	console.log('t1 ..')
},0)

console.log('after t1 ..')

const t2 = setInterval(()=>{
	console.log('t2 ..')
})
clearInterval(t2)
console.log('after t2 ..')

const t3 = setImmediate(()=>{
	console.log('t3 ..')
})
clearImmediate()