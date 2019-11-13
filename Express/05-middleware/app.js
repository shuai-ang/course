const express = require('express')
const app = express()

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('always do sth')
	next()
})

app.all('/',(req,res,next)=>{
	console.log('always do eth')
	next()
})

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.put('/', function (req, res) {
  res.send('PUT request to the homepage')
})

app.delete('/', function (req, res) {
  res.send('DELETE request to the homepage')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))