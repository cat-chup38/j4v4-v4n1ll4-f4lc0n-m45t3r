(function () {

    var agregar = function () {
        var nuevo_nodo = document.createElement("div");
        var padre = document.getElementById("modal");
        var referencia = document.getElementsByTagName("div")[0];
        nuevo_nodo.setAttribute("background-color", "green"); //cambiar el atributo

        var texto1=document.getElementById("texto1").value; 

        var contenido = document.createTextNode(texto1);
        nuevo_nodo.appendChild(contenido);

        var insertedNode = padre.insertBefore(nuevo_nodo, referencia);
        alert("agregado");
    };

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);
}())