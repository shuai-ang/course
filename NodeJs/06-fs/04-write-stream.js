const fs = require('fs');

//1.打开可写流 =>2.写入流 =>3.结束写入 =>4.关闭可写流

const ws = fs.createWriteStream('./04.ws.txt',{flags:'w',encoding:'utf-8'})

ws.on('finish',()=>{
	console.log('create write stream')
})
ws.on('close',()=>{
	console.log('close write stream')
})

ws.write('everyone')
ws.end('ok')