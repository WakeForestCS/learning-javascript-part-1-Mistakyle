var express =  require('express');
var server = express();
var path = require('path')







server.get('/', function (req, res) {
  res.send('Hello Dr. Pauca')
  //res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/secret', function(req,res){
  res.send('Secret Section')
})



server.listen(3000)



//var server = http.createServer(function (request, response) {
  // console.log('got a request')
   //response.write('hi');
   //response.end();

//})

//server.listen(3000)
