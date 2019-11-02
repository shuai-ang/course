const http = require('http');

const server = http.createServer((req,res)=>{
	console.log(req.url)
	console.log(req.method)
	res.write('hello')
	res.end('ok')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log("server is running at http://127.0.0.1:3000")
})