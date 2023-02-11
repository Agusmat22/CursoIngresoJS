/*  NOMBRE: Agustin Garcia Navas

Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{	
		// "case" es igual al IF pero con ===, ej: if(mes === Enero)
		case "Enero":
			mensaje = "que comiences bien el año!!!.";
		break; //"break" es para terminar la operacion y continuar con la siguiente
		case "Marzo":
			mensaje = "a clases!!!.";
		break;
		
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
		break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!.";
		break;
		
		//default abarca TODO lo que no se asigno en los case
		default: 
			mensaje = "No se asigno nada bro";
		break;	 

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN