/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	//txtIdSuma
	//txtIdPromedio

	var contador;
	var acumuladorSuma;
	var cantidadNumeroIngresados;
	var promedio;
	var respuesta = "Si";

	acumuladorSuma = 0;
	cantidadNumeroIngresados = 0;

	//utilizo "respuesta y le coloco un valor para que ingrese directo al WHILE"
	while (respuesta == "Si") 
	{	
		//consulto el numero que quiera ingresar
		contador = prompt("Ingrese los numeros para realizar la suma");

		//parseo el numero
		contador = parseInt(contador);

		//acumulo el numero ingresado y lo sumo con el anterior
		acumuladorSuma = acumuladorSuma + contador;

		//Le consulto si quiere ingresar otro numero
		respuesta = prompt("Quiere ingresar otro numero? (Si o No)");

		//sumo de a + 1 la cantidad de veces que se ingreso un numero
		cantidadNumeroIngresados++;

	}

	promedio = (acumuladorSuma / cantidadNumeroIngresados).toFixed(2);

	document.getElementById("txtIdSuma").value = acumuladorSuma;

	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN