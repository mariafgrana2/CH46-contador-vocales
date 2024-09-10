console.log("Conteo de vocales");

/**
 Encuentra el número de letras que eixten en el
 nombre
 @letra {string} letra a buscar
 @nombre {string} nombre a buscar la letra
 return número de letras encontradas
*/
function encontrarNumeroDeLetra( letra, nombre ) {    
    let numeroDeLetras = 0;
    for(let index = 0; index < nombre.length; index++ ) {
        let letraAEvaluar = nombre.charAt( index );
        if( letraAEvaluar === letra){
            numeroDeLetras++;
        }
    }
    return numeroDeLetras;
}

console.log(encontrarNumeroDeLetra("a","estefany"));

function manejoDelEventoDeInputNombre(){
   console.log("Me estoy invocando");
}