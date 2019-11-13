const express = require('express')
const app = express()

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('always do sth')
	next()
})
//http://localhost:3000/?name=Tom&age=18
app.get('/',(req, res)=>{
	console.log(req.query)
  res.send('GET request')
})

//http://localhost:3000/users/123/books/456
app.get('/users/:usersID/books/:booksID',(req,res)=>{
	console.log(req.params)
	res.send('GET request')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))