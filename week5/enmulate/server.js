var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    var author = {name: 'sunny', job: 'student'};
    //var path = ''
    //var file = fs.readFileSync('/Users/sunny/test/cs546/week5/enmulate/views/index.ejs', "utf8");
    //file = file.replace('##name##', author.name); 
    //file = file.replace('##job##', author.job); 
    //res.send(file);  
    res.render('index', author);    
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
