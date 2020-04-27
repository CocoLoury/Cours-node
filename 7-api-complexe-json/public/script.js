window.onload = function(){

    console.log("JS coté client !");

    var app = document.getElementById('app');
    var change = document.getElementById('change');

    change.addEventListener("click", function(){

        //app.style.background = "yellow";
        app.classList.toggle("active");

    });

}