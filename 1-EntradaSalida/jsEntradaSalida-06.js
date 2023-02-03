/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	let mensaje;

	numeroUno =document.getElementById("txtIdNumeroUno").value;
	numeroDos =document.getElementById("txtIdNumeroDos").value;

	//asi se tiene que declarar el parseInt o parseFloat porque cualquier error que pase lo podemos desglozar sin que se funda todo. Es mejor tener paso por paso a tratar de resumir codigo.
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;

	mensaje = "El resultado es "+ resultado;

	alert(mensaje);
}

