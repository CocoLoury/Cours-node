// Appel le module Twig (système de template)
var twig = require('twig')
// Appel le module Express (Serveur Http)
var express = require('express');
var app = express();

var mysql = require('mysql');
var conn = mysql.createConnection({
    database: 'loury_competence',
    host: "mysql-loury.alwaysdata.net",
    user: "loury_c",
    password: "AAAAA12345!!!!!"
  });

// Créer un port dynamique pour le localhost ou la version en ligne 
app.set('port', process.env.PORT || 8080);

// Défini un dossier public pour les assets (img / js / css) 
app.use(express.static('public'));

// La base de données
var bdd = require('./connexionBDD.js');

//API json
var request = require('request');
var urlApi = "http://loury.alwaysdata.net/mesExp.json";

// Routes de l'applications :
app.get('/', function(req, res){
    // Appel au moteur de template Twig
    res.render("index.twig"); // Va chercher index.twig dans le dossier views
});

app.get('/mesExp', function(req, res){
    // récupère les données du json dans la variable experiences
    request(urlApi, function(error, response, body){
        var data = JSON.parse(body);
        res.render("mesExp.twig", {experiences : data.experience}); // Va chercher mesExp.twig dans le dossier views
    });
});

app.get('/competence', function(req, res){
    // Appel au moteur de template Twig
    conn.connect(function(err){
        var sql = "SELECT Intitule, Note FROM Competences";
        conn.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result)
          res.render("competence.twig", {competences : result});
        });
    })
});

app.get('/contact', function(req, res){
    // Appel au moteur de template Twig
    res.render("contact.twig"); // Va chercher contact.twig dans le dossier views
});

app.get('/a-propos', function(req, res){
    // Appel au moteur de template Twig
    res.render("aPropos.twig"); // Va chercher aPropos.twig dans le dossier views
});


// Autres routes = erreur 404 : 
app.get('*', function(req, res){
    res.send("Erreur 404");
});

// Ecoute le port de dynamique
app.listen(app.settings.port);