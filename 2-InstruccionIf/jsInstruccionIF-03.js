//nombre: Agustin garcia navas
/* Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. */

function mostrar() 
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//edad es mayor a 18
	if( edad >= 18)
	{
		alert("Es mayor de edad");
	}
	else 
	{
		alert("Es menor de edad");
	}




}