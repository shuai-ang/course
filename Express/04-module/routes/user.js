var express = require('express')
var router = express.Router()
router.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

router.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

router.put('/', function (req, res) {
  res.send('PUT request to the homepage')
})

router.delete('/', function (req, res) {
  res.send('DELETE request to the homepage')
})


module.exports = router;