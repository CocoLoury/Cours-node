// Création d'un serveur sous NODE

// Chargement du module natif "http"
var http = require('http');
// Chargement de mon module natif "monModule" à la racine de l'application (./)
var monModule = require('./monModule');

// Création du serveur
var server = http.createServer(function(req, res){
    console.log("Un client accède au serveur !")
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    /* ou */
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');

    // res.end("Bonjour, je suis ton serveur Node");
    res.write('<html></head></head><body><h1>Année de naissance : '+monModule.naissance+'</h1>'+monModule.age()+'<p>ok ça marche</p></body></html>');
    res.end();

});

// Ecouter le port XXXX
server.listen(8080);
console.log("serveur lancé, consultez le port 8080")