//nombre: Agustin garcia navas
/* Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */

function mostrar() 
{
	var clave = "utn750";

	clave = prompt("Ingrese la clave");

	while(clave != "utn750")
	{
		clave = prompt("Error, ingrese nuevamente");

		if(clave == "utn750")
		{
			mensaje = "Ingreso correctamente la clave";

			break;
		}
	}

	alert(mensaje);
	


}