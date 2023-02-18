/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	respuesta=true;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0; // ME FALTA HACERLO PORQUE NO ENTENDI LA CONSIGNA
	

	while(respuesta == true)
	{	
		numeroIngresado = prompt("Ingrese un numero");

		numeroIngresado = parseInt(numeroIngresado);

		//validacion que el dato ingresado sea un numero, en caso que no le va repetir el ciclo hasta que ingrese un numero
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("[ERROR!] No ingreso un numero, intente nuevamente.");

			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado < 0)
		{
			sumaNegativos = sumaNegativos + numeroIngresado;

			cantidadNegativos++;
		}
		else
		{
			sumaPositivos = sumaPositivos + numeroIngresado;

			cantidadPositivos++;

		}
		respuesta = confirm("Desea ingresar un numero nuevamente?") 
	}

	//promedio de los negativos
	promedioNegativos = sumaNegativos / cantidadNegativos;
	//promedio de los positivos
	promedioPositivos = sumaPositivos / cantidadPositivos;

	//diferencia entre positivos y negativos
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;



	mensaje = (" La suma de negativos es : "+sumaNegativos+ "\r La suma de los positivos es : "+sumaPositivos+ "\r La cantidad de negativos es :"+cantidadNegativos+ "\r La cantidad de positivos es : "+cantidadPositivos+ "\r El promedio de los negativos es : "+promedioNegativos+ "\r El promedio de los positivos es : "+promedioPositivos);

	alert(mensaje);


	//NOMBRE: AGUSTIN GARCIA NAVAS 

}//FIN DE LA FUNCIÓN