/* 
8 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let colores = ["azul","amarillo","rojo","verde","rosa"];

let pintura = prompt("que color de pintura desea:" ).toLowerCase();

//comprobar si existe
if(colores.indexOf(pintura) !== -1){
    document.write("su color esta disponible")
}

else{
    document.write("se acabo este color")
}
