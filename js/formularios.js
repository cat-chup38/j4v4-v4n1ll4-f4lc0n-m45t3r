(function () {

    var formulario1 = document.getElementsByName('formulario1')[0];
    var elementos = formulario1.elements;
    
    var validarNombre = function(e){
        if(formulario1.nombre.value == 0){
            alert("completa el campo");
            e.preventDefault();
        }
    }

    var validarGenero = function(e){
        if (formulario1.genero[0].checked == true || formulario1.genero[1].checked == true) {
            
        }
        else{
            alert("selecciona el Genero");
            e.preventDefault();            
        }
    }

    var validar = function(e){
        validarNombre(e);
        validarGenero(e);
    }

    formulario1.addEventListener("submit", validar);


}())