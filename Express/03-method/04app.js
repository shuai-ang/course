const express = require('express')
const app = express()

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('always do sth')
	next()
})
app.get('/',(req,res)=>{
	
	// res.end('GET request')
	// res.end('<h1>res</h1>')
	// res.end('{name:"Tom"}')
	// res.json({name:"Tom"})
	// res.json('<h1>res</h1>')
	// res.send('<h1>res</h1>')
	res.send({name:"Tom"})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))