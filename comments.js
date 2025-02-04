//create web server
//create route for /comments
//send back some data
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var obj = {
        name: 'John',
        age: 30
    };
});
   