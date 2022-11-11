/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//1) preguntamos la figura que tenemos:
let figura =prompt("escribe que figura desear utilizar: cuadrado, triangulo, rombo, circulo o rectangulo")

//2) Creamos  las variable

let base;
let altura;
let radio;
let Diametro;
let diametro;

//3) las condiciones  en base a la pregunta --> switch

switch(figura){
    case "triangulo":
        // le preguntaremos en base  a la formula
        base = prompt("cuanto tienes de base?:")
        altura = prompt("cuanto tienes de altura?:")
        //prueba la consola
        console.log(`el area del triangulo es ${base*altura/2}`)
        break
    case "rectangulo":
        base = prompt("cuanto tienes de base?:")
        altura = prompt("cuanto tienes de altura?:")
        console.log(`el area del rectangulo es ${base*altura}`)
        break
    case "circulo":
        radio= prompt("cuanto tienes de base?:")
        //math.pow() --> crear la potencia  y el pi 
        console.log(`el area del circulo es ${math.pi*math.pow(radio,2)}`)
        break
    case "rombo":
        Diametro = prompt("cuanto es el Diametro mayor?")
        diametro = prompt("cuanto es el diametro mayor?")
        console.log(`El area del rombo es ${Diametro*diametro/2}`)
        break
    case "cuadrado":
        lado = prompt("cuanto de lado tienes?")
        console.log(`El area del cuadrado es ${lado*lado}`)
        break
        default:
        console.log("esta figura no esta disponible")
}