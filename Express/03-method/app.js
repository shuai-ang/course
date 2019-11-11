const express = require('express')
const app = express()

app.use(express.static('public'))
// app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))