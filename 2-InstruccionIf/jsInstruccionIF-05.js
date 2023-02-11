//nombre: Agustin garcia navas
function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	// "||"se utiliza para decir edad es menor a 12 " o " edad es mayor a 19. "||" este simbolo es de logica
	if (edad <=12 || edad >=19 )
	{
		mensaje = ("Usted no es un adolecente");
		alert(mensaje);
	}
	
	

}//FIN DE LA FUNCIÓN

// || = or
// && = and