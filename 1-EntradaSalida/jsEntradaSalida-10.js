/* Agustin Garcia Navas
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	
	//asignamos las variables
	let importe;
	let descuentoIngresado;
	let descuentoImporte;
	let importeTotal;

	//tomamos el dato que el usuario ingresa
	importe = document.getElementById("txtIdImporte").value;

	//transformo el strings a un entero
	importe = parseInt(importe);
	
	//recuadro para que el usuario ingrese un dato por el descuento
	descuentoIngresado = prompt ("Escriba el porcentaje de descuento que desea");

	//transformo el strings a un entero
	descuentoIngresado = parseInt(descuentoIngresado);

	//calculamos el descuento
	descuentoImporte = (importe*descuentoIngresado)/100;

	//calculo del importe inicial mas el descuento
	importeTotal = importe - descuentoImporte;

	//mostramos la informacion por ID
	document.getElementById("txtIdResultado").value = importeTotal;
}
