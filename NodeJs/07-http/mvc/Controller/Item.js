const { get:getItem,add:addItem,del:delItem } = require('../model/item.js');
const path = require('path');
const mime = require('../mime.json');
const swig = require('swig');
const querystring = require('querystring');

class Controller{
	index(req,res,...args){
		getItem()
		.then(data=>{
			// console.log(data)
			const filename = path.normalize(__dirname +'/../view/index.html');
			var template = swig.compileFile(filename)
			const html = template({
				data:data
			})
			
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.end(html)
		})
		.catch(err=>{
			res.setHeader('Content-Type','text/html;charset="utf-8"')
			res.statusCode = 404
			res.end('<h1>请求的地址出错啦</h1>')
		})
	}
	add(req,res,...args){
		//1.获取参数信息
		let body = ''
		req.on('data',(chunk)=>{
			body += chunk
		})
		req.on('end',()=>{
			//2.根据参数信息生成任务对象写入文件中
			const query = querystring.parse(body)
			// console.log(query)
			addItem(query.task)
			.then(data=>{
				//3.如果成功则将任务对象返回到前端
				res.end(JSON.stringify({
					code:0,
					message:'添加数据成功',
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:'添加数据失败',
					data:err
				}))
			})
		})
	}
	del(req,res,...args){
		console.log(args)
		const id = args[0];
		delItem(id)
		.then(data=>{
			res.end(JSON.stringify({
				code:0,
				message:"删除数据成功"
			}))
		})
		.catch(err=>{
			console.log(err)
			res.end(JSON.stringify({
				code:0,
				message:"删除数据失败"
			}))
		})
	}
}

module.exports = new Controller()