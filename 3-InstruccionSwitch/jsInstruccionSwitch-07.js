function mostrar()
{
	//txtIdDestino
	
	var destino;
	var mensaje;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "Sur";
		break; 

		case "Cataratas":
			mensaje = "Norte";
		break; 

		case "Mar del plata":
			mensaje = "Oeste"
		break; 

		case "Ushuaia":
			mensaje = "Este"
		break; 

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN