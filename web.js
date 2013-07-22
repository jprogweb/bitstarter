var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var texto = fs.readFileSync('index.html', 'utf8');

app.get('/', function(request, response) {
  response.send(texto);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
