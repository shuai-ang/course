const { Readable } = require('stream');
/*
const reader = new Readable();
reader.on('data',(chunk)=>{
	console.log(chunk)    //The _read() method is not implemented
})
*/
class CustomStream extends Readable{
	constructor(){
		super()
		this.index = 0;
	}
	_read(){
		this.index ++;
		if(this.index <5){
			this.push(this.index +'')
		}else{
			this.push(null)
		}
	}
}

const read = new CustomStream();
/*
//获取数据流程
//1.保存数据
let body = '';
//2.获取数据
read.on('data',(chunk)=>{
	body += chunk;
})
//3.获取数据完毕监听end事件
read.on('end',()=>{
	console.log(body)
})
*/
read.pipe(process.stdout)