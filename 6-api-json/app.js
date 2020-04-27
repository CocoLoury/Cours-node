// Appel le module Twig (système de template)
var twig = require('twig')
// Appel le module Express (Serveur Http)
var express = require('express');
var app = express();

// Nos données
var equipe = require('./equipe')

// Défini un dossier public pour les 
app.use(express.static('public'));

// API Json
var request = require('request');
var urlApi = "http://localhost:8080/classe.json";

// Routes de l'applications :
app.get('/', function(req, res){
    // Appel au moteur de template Twig
    res.render("index.twig"); // Va chercher index.twig dans le dossier views
});

app.get('/a-propos', function(req, res){
    var creation = 2003;
    res.render("aPropos.twig",{dateCreation : creation}); // Va chercher aPropos.twig dans le dossier views
});

app.get('/equipe', function(req, res){
    // console.log(equipe)
    res.render("equipe.twig",{membres : equipe.datas}); // Va chercher aPropos.twig dans le dossier views
});

app.get('/equipe/:alias', function(req, res){
    // console.log(equipe)
    var membres = equipe.datas;
    var alias = req.params.alias;

    // Extraire le bon membre
    var membre = membres.filter(membre => membre.pseudo == alias);
    console.log(membre);
    

    res.render("equipe-details.twig",{membre : membre[0]}); // Va chercher aPropos.twig dans le dossier views
});

app.get('/classe', function(req, res){
    request(urlApi, function(error, response, body){
        var data = JSON.parse(body);
        //console.log(data.ecole);
        res.render("classe.twig", {data : data}); // Va chercher classe.twig dans le dossier views
    });
});


// Autres routes = erreur 404 : 
app.get('*', function(req, res){
    res.send("404");
});

// Ecoute le port de 8080
app.listen(8080);

// Ecoute le port de l'environement
//app.listen(process.env.PORT);

