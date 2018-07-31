var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) { 
  res.send('Hello World') 
})

app.all ("/*", function (req, res, next) {
    res.sendFile('index.html',{root: __dirname + '/public'});
})

app.listen('8080', function () {
    console.log('Ta indo');
})