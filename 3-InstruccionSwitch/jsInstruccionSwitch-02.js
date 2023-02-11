/* NOMBRE: Agustin Garcia Navas

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.  */

function mostrar()
{
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{	
		//meses que faltan para invierno
		case "Abril":
			mensaje = "Falta para el invierno.";
		break;
		case "Mayo":
			mensaje = "Falta para el invierno.";
		break;	
		case "Junio":
			mensaje = "Falta para el invierno.";
		break;	
		
		//meses de invierno
		case "Julio":
			mensaje = "Abrigate que hace frio.";
		break;
		case "Agosto":
			mensaje = "Abrigate que hace frio.";	
		break;

		//meses que ya hacen calor
		case "Septiembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
		case "Octubre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
		case "Noviembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
		case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
		case "Enero":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;
		case "Febrero":
			mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;
		case "Marzo":
			mensaje = "Ya pasamos el frio, ahora calor!!!."
		break;

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN