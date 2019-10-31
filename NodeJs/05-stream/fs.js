//同步读写文件
const fs = require('fs');
/*
const fd = fs.openSync('./aa.txt','a');

fs.writeSync(fd,'world')

fs.closeSync(fd)
*/
fs.writeFileSync('./aa.txt','good',{flag:'a'})