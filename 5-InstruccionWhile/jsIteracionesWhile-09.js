/* NOMBRE: AGUSTIN GARCIA NAVAS

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	//txtIdMaximo
	//txtIdMinimmo

	//bandera = "flags" esto para saber cuando da su primera vuelta en el while. se usa siempre para maximos y minimos.

	var numeroIngresado;
	var respuesta = true;
	var numeroMax;
	var numeroMin;
	var bandera = "es la primera vez";  //bandera = "flags" esto para saber cuando da su primera vuelta en el while. se usa siempre para maximos y minimos.
	
	while(respuesta == true)
	{
		numeroIngresado = prompt("Ingresar un numero");

		numeroIngresado = parseInt(numeroIngresado);

		//isNaN le consulto si el dato ingresado es NaN, en caso que si va repetir el bucle hasta que deje de ser NaN
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("[ERROR!]No ingreso un numero, intente nuevamente");

			numeroIngresado = parseInt(numeroIngresado);

		}

		if(bandera == "es la primera vez")
		{
			numeroMax = numeroIngresado;
			numeroMin = numeroIngresado;

			bandera = "ya paso la primera vuelta";
		}
		else
		{
			if(numeroIngresado > numeroMax)
			{
				numeroMax = numeroIngresado;
			}
			else
			{
				if(numeroIngresado < numeroMin)
				{
					numeroMin = numeroIngresado;
				}
			}

		}

		respuesta = confirm("Desea ingresa otro numero?");
	}

	document.getElementById("txtIdMaximo").value = numeroMax;
	document.getElementById("txtIdMinimo").value = numeroMin;
	
}//FIN DE LA FUNCIÓN

/* 
VALIDACIONES

isNaN() // esto nos va decir si NO es un numero

ejemplo si en un ID ingresan un texto en ves de un numero y hay que validarlo con isNaN, ya que nos da Nan cuando lo ingresado no es un numero




*/