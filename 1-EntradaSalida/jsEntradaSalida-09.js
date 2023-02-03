/* Agustin Garcia Navas
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	
	//declaro variables
	let sueldoIngresado;
	let aumento;
	let sueldoAumentado;

	//tomo el dato que ingrese el usuario sobre su sueldo actual
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	//el strings lo transformo a entero
	sueldoIngresado = parseInt(sueldoIngresado);
	
	//le solicito mediante un recuadro el aumento que desea
	aumento = prompt("Ingrese el porcentaje que desea de aumento");

	//lo transformo a entero
	aumento = parseInt(aumento);

	//realizo la suma del sueldo inicial con el aumento que desea
	sueldoAumentado = sueldoIngresado + (sueldoIngresado*aumento)/100;

	//la informacion la muestro por el recuadro resultado
	document.getElementById("txtIdResultado").value = sueldoAumentado;

}
