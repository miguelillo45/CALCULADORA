/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/

//1) Preguntamos la figura que deseamos
let figura = prompt("Escribe que figura deseas utilizar: triángulo, rombo, paralelogramo, trapecio, pentágono, hexágono, rectángulo, cuadrado o circulo")

//2) Creamos las variable
let base;
let altura;
let radio;
let lado;
let Diametro;
let diametro;
let perimetro;
let apotema;
let Base;

//3) Las cndiciones en base a la pregunta --> switch

switch(figura){
    case "triángulo":
        //Le preguntaremos en base a la fórmula
        base = prompt("¿Cuánto tienes de base? ")
        altura = prompt("¿Cuánto tienes de altura? ")
        // Prueba en la consola
        document.write(`El área del triángulo es ${base*altura/2}`)
        break
        case "rectángulo":
            //Le preguntaremos en base a la fórmula
            base = prompt("¿Cuánto tienes de base? ")
            altura = prompt("¿Cuánto tienes de altura? ")
            document.write(`el área del rectángulo es ${base*altura}`)
        break
    case "circulo":
        radio = prompt("¿Cuánto de radio tienes? ")
        //math.pow()
        document.write(`El área del circulo es ${Math.PI * Math.pow(radio,2)}`)
        break
    case "cuadrado":
        lado = prompt("¿Cuánto de lado tienes? ")
        document.write(`El área del cuadrado es ${lado*lado}`)
        break
    case "rombo":
    Diametro = prompt("¿Cuánto es el Diametro mayor? ")
    diametro = prompt("¿Cuánto es el diametro menor? ")
    document.write(`El área del rombo es ${Diametro*diametro/2}`)
        break
    case "pentágono":
    perimetro = prompt("¿Cuánto es el perimetro? ")
    apotema = prompt("¿Cuánto es el apotema? ")
    document.write(`El área del pentágono es ${perimetro*apotema/2}`)
        break
    case "hexágono":
    perimetro = prompt("¿Cuánto es el perimetro? ")
    apotema = prompt("¿Cuánto es el apotema? ")
    document.write(`El área del hexágono es ${perimetro*apotema/2}`)
        break
    case "paralelogramo":
    base = prompt("¿Cuánto tienes de base? ")
    altura = prompt("¿Cuánto tienes de altura? ")
    document.write(`El área del paralelogramo es ${base*altura}`)
    break
    case "trapecio":
    Base = prompt("¿Cuánto tines de Base mayor? ")
    base = prompt("¿Cuánto tienes de base menor? ")
    altura = prompt("¿Cuánto tienes de altura? ")
    document.write(`El área del trapecio es ${Base*base*altura/2}`)
    break
    default:
        document.write("Esta figura no esta disponible")
}




document.getElementById(`Aumentar`)
let previousClass = classIndex
classIndex++;