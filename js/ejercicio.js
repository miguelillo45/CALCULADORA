//APAREZCA UNA VENTANA INICIAL
//alert("Deseas iniciar este programa?")

//aparezca una pagina web
//document.write("Deseas iniciar este programa?")

//aparezca como funcion de prueba
//console.log("Deseas iniciar este programa?")
/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings (plantillas de cadena)
*/
var nombre = prompt("escriba el nombre")
var edad =  parseInt("escriba su edad")

document.write(`Hola ${nombre}, tienes ${edad} años y el año q2ue viene tendras ${edad+1}años`)
// para convertir en numeros enteros --> parseint

