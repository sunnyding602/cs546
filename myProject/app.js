var express = require('express');
var https = require('https');
const fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
};

https.createServer(options, app).listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
