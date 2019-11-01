//同步读取文件

//逐步读取
const fs = require('fs');
/*
const fd = fs.openSync('./03.txt','r');

let buf = Buffer.alloc(100);

fs.readSync(fd,buf,0,50,0);

fs.closeSync(fd)
*/
//合并读取
const buf = fs.readFileSync('./03.txt',{encoding:'utf-8',flag:'r'})
console.log(buf)