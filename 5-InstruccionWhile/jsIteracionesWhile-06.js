// NOMBRE: AGUSTIN GARCIA NAVAS
function mostrar()
{
	//txtIdSuma
	//txtIdPromedio


	var contador;
	var acumulador;
	var cantidadNumerosIngresados;
	var promedio;
	
	//le asigno un valor para que se puedan acumular
	acumulador=0;
	cantidadNumerosIngresados = 0;

	while(cantidadNumerosIngresados < 6)
	{	
		//pido el dato
		contador = prompt("Ingrese un numero");

		// parse el dato
		contador = parseInt(contador);

		//acumulo los numeros ingresados
		acumulador+= contador;

		// acumulo la cantidad de veces que se ingreso un numero
		cantidadNumerosIngresados++;


	}

	promedio = (acumulador / cantidadNumerosIngresados).toFixed(2);

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	
}//FIN DE LA FUNCIÓN

/* break rompe la funcion while y sale
"confirm()" esto sirve para continuar, en caso de aceptar es true y si se cancela es false


*/ 