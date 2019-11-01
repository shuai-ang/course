//逐步操作
const fs = require('fs');
const util = require('util');
/*
//1.打开文件
fs.open('./aa.txt','w',(err,fd)=>{
	if(err){
		console.log('open file err')
	}else{
		//2.写入内容
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log(err)
				console.log('write file err')
			}else{
				//3.保存并退出
				fs.close(fd,(err)=>{
					if(err){
						console.log('close file err')
					}
					
				})
			}
			
		})
	}
})
*/
/*
fs.writeFile('./aa.txt','world',{flag:'a'},(err)=>{
	if(err){
		console.log('err')
	}
})
*/
const writefile = util.promisify(fs.writeFile);
writefile('./aa.txt','hello',{flag:'a'})
.then(()=>{
	console.log('write file success')
})
.catch(()=>{
	console.log('write file err')
})