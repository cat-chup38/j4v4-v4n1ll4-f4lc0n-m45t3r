var nuevo_nodo = document.createElement("div");
var padre = document.getElementById("modal");
var referencia = document.getElementsByTagName("div")[0];
nuevo_nodo.setAttribute("background-color", "green"); //cambiar el atributo

var contenido = document.createTextNode("Cambio");
nuevo_nodo.appendChild(contenido);

var insertedNode = padre.insertBefore(nuevo_nodo, referencia);
