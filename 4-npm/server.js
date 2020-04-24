var http = require('http');

var server = http.createServer(function(req, res){
    console.log("Un client accède au serveur !")
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

    res.write('<html></head></head><body><h1>Mon serveur Node avec nodemon</h1><p>ok ça marche</p></body></html>');
    res.end();

});

server.listen(8080);
console.log("serveur lancé, consultez le port 8080")