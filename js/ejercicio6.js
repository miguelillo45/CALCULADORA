// unir el identificador principal  con el id
//Conectamos con un evento 

document.getElementById("boton").addEventListener("click",function(){
//obtener los valores 
    var  nom = document.getElementById("nombre").value
    var  ape = document.getElementById("apellido").value
    var  ed  = document.getElementById("edad").value
//mostrar la informacion 
// innerHTML  -->  texto que aparece segun  el ID (añadir)
    document.getElementById("salida").innerHTML= "hola" + nom +" "+ ape + " "+ ed + " ya formas parte del instituto y ganaste una beca "
})