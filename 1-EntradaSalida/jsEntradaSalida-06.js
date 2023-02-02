/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno =parseFloat(document.getElementById("txtIdNumeroUno").value);
	numeroDos =parseFloat(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	// ${aca va la variable} sirve para seleccionar la variable dentro de la cadena de texto
	alert(`La suma es ${resultado}`);

}

