(function () {

    var contador = 0;

    var contar = function(){
        console.log(contador);
        contador++;

        if (contador === 5) {
            clearInterval(intervalo);
        }
    };

    var intervalo = setInterval(contar, 3000);
}())