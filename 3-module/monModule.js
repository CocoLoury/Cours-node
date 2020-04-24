
// Exporter une variable
var naissance = 1999;
exports.naissance = naissance;

// Exporter une méthode
var age  = function(){
    var annee = new Date().getFullYear();
    var monAge = annee - naissance;
    return "<h2 style='color:red'>Mon âge est "+monAge+"</h2>"
}

exports.age = age;

