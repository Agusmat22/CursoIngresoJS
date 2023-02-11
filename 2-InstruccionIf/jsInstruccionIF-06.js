//nombre: Agustin garcia navas
function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);
	//condicion a evaluar, para ver si es TRUE
	if ( edad > 17 )
	{
		mensaje = "Usted es adulto";
	}
	else //si no es true quiere decir que es FALSE 
	{	// && significa "y" osea que desde los 17 hasta los 13
		if( edad < 13)
		{
			mensaje = "Usted es  niño";
		}
		else  
		{
			mensaje = "Usted es un adolecente";
		}
	} 
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN