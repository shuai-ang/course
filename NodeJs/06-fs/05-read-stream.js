const fs = require('fs');

//1.打开可读流 =>2.读取流 =>3.结束读取 =>4.关闭可读流
const rs = fs.createReadStream('./05.rs.txt',{flags:'r',encoding:'utf-8'});

rs.on('end',()=>{
	console.log('read stream done')
})

rs.on('close',()=>{
	console.log('close read stream')
})

rs.on('data',(chunk)=>{
	console.log(chunk)
})

