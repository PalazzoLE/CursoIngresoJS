/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	/*var numero1 = parseInt(document.getElementById('numeroUno').value);
	var numero2 = parseInt(document.getElementById('numeroDos').value);
	var resultado = numero1 + numero2;
	alert("la suma es "+resultado);*/

	var numero1;
	var numero2;
	var resultado;

	numero1= document.getElementById('numeroUno').value;
	numero2= document.getElementById('numeroDos').value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("la suma es "+
		resultado);
	
/*
	var numero1 = 2;
	var numero2 = 3;
	var resultado = numero1 + numero2;
	alert(resultado);*/
}

