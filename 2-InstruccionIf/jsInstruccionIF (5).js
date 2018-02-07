function Mostrar()
{
//tomo la edad  
var edad;
	edad = document.getElementById('edad').value;

/*if (edad >= 13 && edad <= 17) {
}else{
	alert("no es un adolecente");
}*/

if (!(edad >= 13 && edad <= 17)) {
	alert("no es adolecente");
}

}//FIN DE LA FUNCIÓN