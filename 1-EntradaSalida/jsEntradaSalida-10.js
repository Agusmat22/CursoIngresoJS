/* Agustin Garcia Navas
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	
	//asignamos las variables
	let importe;
	let descuento;
	let resultado;

	//tomamos el dato que el usuario ingresa
	importe = document.getElementById("txtIdImporte").value;

	//transformo el strings a un entero
	importe = parseInt(importe);
	
	//recuadro para que el usuario ingrese un dato por el descuento
	descuento = prompt ("Escriba el porcentaje de descuento que desea");

	//transformo el strings a un entero
	descuento = parseInt(descuento);

	//calculo del importe inicial mas el descuento
	resultado = importe - (importe*descuento)/100;

	//mostramos la informacion por ID
	document.getElementById("txtIdResultado").value = resultado;
}
