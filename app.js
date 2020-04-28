let express = require('express');
let bodyParser = require('body-parser');
var http = require('http');
let tf = require('@tensorflow/tfjs');
let app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/')); 
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', function(req, res){
    console.log("conn");
    res.render('./index.html');
});

server.listen(3000, function(){
    console.log("start");
});