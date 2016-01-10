var express = require('express')
var app = express()
var path = require('path')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/views/assets'))

var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(request, response) {
  response.render('index');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
