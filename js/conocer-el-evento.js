(function () {

    var saberEvento = function(e)
    {   
        // para saber que evento se esta ejecutando
        alert("El evento es: " + e.type);
        // para saber a que elemento se esta haciendo el evento
        alert("El evento es: " + e.target);
    };

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", saberEvento);
}())