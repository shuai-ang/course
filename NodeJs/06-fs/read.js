//同步读取文件

//逐步读取
const fs = require('fs');
const util = require('util');
/*
const fd = fs.openSync('./03.txt','r');

let buf = Buffer.alloc(100);

fs.readSync(fd,buf,3,3,1);

console.log(buf)

fs.closeSync(fd)
*/
/*
//合并读取
const buf = fs.readFileSync('./03.txt',{encoding:'utf-8',flag:'r'})
console.log(buf)
*/

//异步读取文件
/*
//逐步读取
fs.open('./03.txt','r',(err,fd)=>{
	if(err){
		console.log('open file err',err)
	}else{
		let buf = Buffer.alloc(100)
		fs.read(fd,buf,0,50,0,(err)=>{
			if(err){
				console.log('read file err',err)
			}else{
				console.log(buf)
			}
			fs.close(fd,(err)=>{
				if(err){
					console.log('close file err',err)
				}
			})
		})
	}
})
*/
/*
//合并读取
fs.readFile('./03.txt',{encoding:'utf-8',flag:'r'},(err,data)=>{
	if(err) throw err;
	console.log(data)
})
*/

//异步读取文件
const rs = util.promisify(fs.readFile);
rs('./03.txt',{encoding:'utf-8',flag:'r'})
.then(data=>{
	console.log(data)
})
.catch(err=>{
	console.log(err)
})