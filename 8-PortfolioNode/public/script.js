window.onload = function(){

    console.log("JS coté client !");
    var onveuttrier = [];
    onveuttrier.push(this.document.getElementById('trions'))
    var croissant = document.getElementById('tri');
    croissant.addEventListener("click", function(){
        onveuttrier.sort()
        console.log("trier");

    });

}