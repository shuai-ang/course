const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const { get,add,del } = require('./model/item.js');
const swig = require('swig');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	const filepath = req.url;
	const parse = url.parse(req.url,true);//parse是一个URL对象，里面有pathname属性
	
	const pathname = parse.pathname;

	if(pathname.startsWith == '/static/'){
		const filename = path.normalize(__dirname +filepath);

		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset="utf-8"')
				res.statusCode = 404
				res.end('<h1>请求的地址出错啦</h1>')
			}else{
				// console.log(data)
				//根据请求的文件决定不同的文档类型
				// console.log(req.url)
				const extname = path.extname(req.url);
				const mimeType = mime[extname];
				res.setHeader('Content-Type',mimeType +';charset="utf-8"')
				res.end(data)
			}
		})
	}else{
		// console.log(pathname)
		const paths = pathname.split('/');
		const controller = paths[1] || 'Index';
		const action = paths[2] || 'index';
		const args = paths.splice(3);
		console.log(args)
		res.end('doing')
	}
	/*
	if(pathname == '/' || pathname == '/index.html'){
		get()
		.then(data=>{
			// console.log(data)
			const filename = path.normalize(__dirname +'/index.html');
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
	}else if(pathname == '/add'){//处理添加数据请求POST
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk
		})
		req.on('end',()=>{
			const query = querystring.parse(body);
			// console.log(query)
			add(query.task)
			.then(data=>{
				// console.log(data)
				res.end(JSON.stringify({
					code:0,
					message:"添加数据成功",
					data:data
				}))
			})
			.catch(err=>{
				console.log(err)
				res.end(JSON.stringify({
					code:1,
					message:"添加数据失败",
					data:err
				}))
			})

		})
	}else if(pathname == '/del'){
		// console.log(parse)
		const id = parse.query.id;
		del(id)
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
	}else{
		const filename = path.normalize(__dirname +filepath);

		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
				res.setHeader('Content-Type','text/html;charset="utf-8"')
				res.statusCode = 404
				res.end('<h1>请求的地址出错啦</h1>')
			}else{
				// console.log(data)
				//根据请求的文件决定不同的文档类型
				// console.log(req.url)
				const extname = path.extname(req.url);
				const mimeType = mime[extname];
				res.setHeader('Content-Type',mimeType +';charset="utf-8"')
				res.end(data)
			}
		})
	}
	*/
	// console.log(filepath)

	
	// res.end('ok')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log("server is running at http://127.0.0.1:3000")
})