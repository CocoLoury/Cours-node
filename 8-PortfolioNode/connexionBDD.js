var mysql = require('mysql');
 
console.log('Get connection ...');

// Création de la connexion à la base de données
var conn = mysql.createConnection({
  database: 'loury_competence',
  host: "mysql-loury.alwaysdata.net",
  user: "loury_c",
  password: "AAAAA12345!!!!!"
});

// Vérification de la connexion
conn.connect(function(err) {
  if (err) throw err;
    console.log("Connected!");
    conn.query("SELECT Intitule, Note FROM Competences", function(err, result, fields){
        if (err) throw err;
        console.log(result);
        exports.data = result;
    });


/*
    // vérifie si la table et supprime si elle existe
    var sql1 = "DROP TABLE IF EXISTS Competences";
    conn.query(sql1, function(err, results){
        if(err)throw err;
        console.log("Table Competences supprimer")
    });
   

    // Création de la table Competences
    var sql2 = "CREATE TABLE Competences" +
        "(Id INT not null AUTO_INCREMENT," +
        "Intitule VARCHAR(255)," +
        "Note INT," +
        "PRIMARY KEY (Id))";
    // Vérification de la création de la table et message
    conn.query(sql2, function(err, results){
        if(err)throw err;
        console.log("Table Competences créer")
    });

    // Tableau de données
    var Intitule = [
        "HTML / CSS", +
        "PHP / Javascript / NodeJS / VueJS", + 
        "Symfony / Vuetify" +
        "SQL / PL/SQL" +
        "GitHub / GitLab" +
        "Java / C#"
        ];
    var Note = [
        "4", +
        "3", +
        "3", +
        "3", +
        "4", +
        "3"
    ];

    // Insertion des données dans la base de données
    for (var i = 0; i<Intitule.length; i++) {
        var sql3 = "INSERT into Competences(Intitule, Note)"
        +
        "Values('"+Intitule[i] + "','"+Note[i]+"')";
        // Vérification d'un 
        conn.query(sql3, function(err, results){
            if(err)throw err;
            console.log("Insertion")
        });

    }*/
});

