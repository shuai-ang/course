const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const swig = require('swig');

const server = http.createServer((req,res)=>{
	const filepath = req.url;
	const parse = url.parse(req.url,true);

	const pathname = parse.pathname;
	if(pathname == '/' || pathname == '/index.html'){
		get()
		.then(data=>{
			const filename = path.normalize(__dirname +filepath);
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
	}else if(pathname == '/add'){

	}else if(pathname == '/del'){

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

	// console.log(filepath)

	
	// res.end('ok')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log("server is running at http://127.0.0.1:3000")
})