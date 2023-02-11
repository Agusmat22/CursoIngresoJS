function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje; 


	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseInt(edad);
	estadoCivil = parseInt(estadoCivil);

	if ( edad < 18 && estadoCivil != "Soltero" )
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	


}//FIN DE LA FUNCIÓN