//写法一
/*
export const a = 1;
export const b = 2;
*/

//写法二
/*
const a = 1;
const b = 2;
export {a,b}
*/
//写法三
/*
const a = 1;
const b = 2;
export {a,b}
*/
//写法四
/*
const a = 1;
const b = 2;
export {
	a as aa,
	b as bb
}
*/
//写法五
// export default 1
//export default 2 //会报错
const a = 1;
export default a
export const b = 22

console.log('this is Module.js ..')