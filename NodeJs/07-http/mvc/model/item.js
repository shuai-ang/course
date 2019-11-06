const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.normalize(__dirname +'/../data/item.json');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function get(){
	//1.读取文件数据
	const data = await readFile(filepath,{encoding:'utf-8',flag:'r'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data)
	// console.log(arr)
	return arr
}

async function add(task){
	//1.读取文件数据
	const data = await readFile(filepath,{encoding:'utf-8',flag:'r'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data)
	const obj = {
		id:Date.now().toString(),
		task:task
	}
	arr.push(obj)
	// console.log(arr)
	await writeFile(filepath,JSON.stringify(arr));
	return obj;
}

async function del(id){
	//1.读取文件数据
	const data = await readFile(filepath,{encoding:'utf-8',flag:'r'})
	//2.返回数据
	// console.log(data)
	const arr = JSON.parse(data)
	const newArr = arr.filter((item)=>{
		return item.id != id;
	})
	await writeFile(filepath,JSON.stringify(newArr));
}

module.exports = {
	get,
	add,
	del
}