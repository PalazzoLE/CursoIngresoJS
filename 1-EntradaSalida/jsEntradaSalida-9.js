/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var porcentajeDeAumento;
	var resultado;
	sueldo = document.getElementById('sueldo').value;
	sueldo= parseInt(sueldo);
	porcentajeDeAumento = (sueldo/100)*10;
	resultado = sueldo + porcentajeDeAumento;
	document.getElementById('resultado').value = resultado;
}
