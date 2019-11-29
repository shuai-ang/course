//写法一
/*
import {a,b} from './Module.js'

console.log('a= ',a)
console.log('b= ',b)
*/
//写法二
/*
import {a,b} from './Module.js'

console.log('a= ',a)
console.log('b= ',b)
*/
//写法三
/*
import {a as aa,b as bbb} from './Module.js'

console.log('a= ',aa)
console.log('b= ',bbb)
*/
//写法四
/*
import {aa as a,bb as b} from './Module.js'

console.log('a= ',a)
console.log('b= ',b)
*/
//写法五
import a,{b} from './Module.js'

console.log('a= ',a)
console.log('b= ',b)
console.log('this is index.js ..')