var express = require('express')
var app = express()
var buff = new Buffer(fs.readFileSync('index.html'), "utf-8")

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send(buff.toString('utf-8'));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
