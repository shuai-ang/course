const http = require('http');

const server = http.createServer((req,res)=>{
	const filepath = req.url;

	const filename = path.normalize(__dirname +filepath)
	res.end('ok')
})

server.listen(3000,'127.0.0.1',()=>{
	console.log("server is running at http://127.0.0.1:3000")
})