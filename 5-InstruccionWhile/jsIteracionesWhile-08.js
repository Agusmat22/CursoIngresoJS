/* NOMBRE: AGUSTIN GARCIA NAVAS


Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//txtIdSuma
	//txtIdProducto

	//declaro variables
	var numero;
	var numerosNegativo;
	var respuesta;
	var sumaPositivos;
	var cantidadNumerosNegativos;
	var multiplicacionNegativos;

	//asigno el valor a las variables
	respuesta = true;
	sumaPositivos=0;
	cantidadNumerosNegativos=0;
	numerosNegativo = 0;

	//creo el bucle para solicitarle reiteradas veces que ingrese un numero
	while(respuesta == true)
	{	
		//solicito un dato
		numero = prompt("Ingrese un numero positivo");

		//parseo el dato
		numero = parseInt(numero);

		//consulto si el numero ingresado es menor a 0 para guardarlo en mi variable de negativos
		if(numero < 0)
		{
			numerosNegativo += numero; 

			cantidadNumerosNegativos++;
		}
		else
		{
			sumaPositivos += numero;  // al no ser menor a 0, ingresa al else
		}

		// consulto si quiere volver a ingresar otro numero
		respuesta = confirm("Usted quiere ingresar otro numero?");
	}

	multiplicacionNegativos = cantidadNumerosNegativos * numerosNegativo;

	document.getElementById("txtIdSuma").value = sumaPositivos;

	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	
	
}
	//FIN DE LA FUNCIÓN