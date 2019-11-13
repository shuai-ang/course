const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//解析json
app.use(bodyParser.json());
//解析urlencoded内容
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'))
// app.use('/static', express.static('public'))


app.post('/', function (req, res) {
	console.log(req.body)
  res.send('POST request to the homepage')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))