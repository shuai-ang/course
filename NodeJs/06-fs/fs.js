//同步读写文件
const fs = require('fs');
/*
//逐步操作
//1.打开文件
const fd = fs.openSync('./aa.txt','a');
//2.写入内容
fs.writeSync(fd,'world')
//3.保存并退出
fs.closeSync(fd)
*/
//合并操作
fs.writeFileSync('./aa.txt','good',{flag:'w'})