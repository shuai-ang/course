const express = require('express')
const app = express()

const userRouter = require('./routes/user.js')
const blogRouter = require('./routes/blog.js')
app.use(express.static('public'))

app.use('/user',userRouter)
app.use('/blog',blogRouter)
/*
app.get('/user', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/user', function (req, res) {
  res.send('POST request to the homepage')
})

app.put('/user', function (req, res) {
  res.send('PUT request to the homepage')
})

app.delete('/user', function (req, res) {
  res.send('DELETE request to the homepage')
})

app.get('/blog', function (req, res) {
  res.send('GET request to the homepage')
})

app.post('/blog', function (req, res) {
  res.send('POST request to the homepage')
})

app.put('/blog', function (req, res) {
  res.send('PUT request to the homepage')
})

app.delete('/blog', function (req, res) {
  res.send('DELETE request to the homepage')
})
*/
app.listen(3000, () => console.log('Example app listening on port 3000!'))