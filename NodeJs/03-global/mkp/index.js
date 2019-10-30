// console.log(process.argv[2])
const fs = require('fs');
//创建项目文件夹
const filename = process.argv[2];//以meizu为例

// fs.mkdirSync('./' + filename)
// fs.mkdirSync('./' + filename + '/css')
// fs.mkdirSync('./' + filename + '/js')
// fs.mkdirSync('./' + filename + '/img')

// console.log(process.env)//返回包含用户环境的对象
console.log(process.pid)//返回进程的PID
