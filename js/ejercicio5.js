// Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// Pediremos por el teclado  la edad 

let edad = prompt("Escriba su edad: ");

// Comprobaremos  que lo introducido es un numero
if(Number(edad) == edad){
    // si es mayor de 18
    if(edad>=18){
    //imprima en html 
    //document.write(" Puedes sacar tu licencia y conducir")
    document.write(`tienes${edad} años y puedes sacar tu licencia y conducir  `);}
else{
    alert(" has puesto una edad no valida ")
}
}