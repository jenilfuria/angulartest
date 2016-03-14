var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');


var app = express();
var server = http.createServer(app);


app.use(express.static('public'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



app.set('port',8080);
app.listen(app.get('port'));
console.log('server listening on port : 8080');



app.get('/',function(req,res){
    res.sendFile('index.html' , { root : 'public'});

});






