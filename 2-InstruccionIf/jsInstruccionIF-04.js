//nombre: Agustin garcia navas
function mostrar()
{
	var edad;
	var mensaje;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//creo un if primero para consultar si tiene o es mayor de 13 
		if( edad >= 13 )
		{
			if( edad <= 17 )
			{
				mensaje = "Es adolecente";
			}
			else 
			{ 	//creo un else adentro del IF por si ingresa una condicion que no es la verdadera muestre la alerta 
				mensaje = "No es adolecente";
			}

		}
		else
		{
			mensaje = "No es adolecente";
		}
		alert(mensaje);
		


}//FIN DE LA FUNCIÓN

// creo otro if para consultar si es igual o menor a 17 para poder declarar el mensaje, se crean dos if en caso de querer corroborar desde los 13 años hasta los 17 años inclusive