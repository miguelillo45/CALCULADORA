/* 
7 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/

let palabra = promt("escriba una palabra: ").tolowercase

let valores = 0;
let consonantes = 0;

for(let i of palabra){
    if(i == "a" ||
    i == "e" ||
    i == "i" ||
    i == "o"||
    i == "u" ) vocales++
    else consonantes++
}
document.write(`tu palabra contiene ${vocales} vocales y ${consonantes} consonante,en total hay${palabra.length}
palabras`)