/*
console.log(exports)
console.log(module.exports)
console.log(module.exports == exports)
*/
console.log('require m7')
const str = '123';
const fn = function(){
	console.log('fn ..')
}
const obj = {
	name : "tom",
	age : 18
}
/*
exports.str = str;
exports.fn = fn;
exports.obj = obj;
*/

module.exports = {
	str,
	fn,
	obj
}
/*
exports = {
	str,
	fn,
	obj
}*/