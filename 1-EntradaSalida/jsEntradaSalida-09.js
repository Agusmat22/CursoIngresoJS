/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoIngresado;
	let sueldoAumentado;

	sueldoIngresado = parseFloat (document.getElementById("txtIdSueldo").value);
	
	sueldoAumentado = sueldoIngresado + (sueldoIngresado*10)/100;

	document.getElementById("txtIdResultado").value = sueldoAumentado;



}
