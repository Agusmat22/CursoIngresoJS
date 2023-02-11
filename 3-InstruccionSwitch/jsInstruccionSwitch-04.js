/* NOMBRE: Agustin Garcia Navas

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.   */

function mostrar()
{
	//txtIdMes
	
	var mes;
	var mensaje;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			mensaje = " si tiene 31 días. ";
		break;
		case "Febrero":
			mensaje = " si tiene 28 días. ";
		break;
		case "Marzo":
			mensaje = " si tiene 31 días. ";
		break;
		case "Abril":
			mensaje = " si tiene 30 días.";
		break;
		case "Mayo":
			mensaje = " si tiene 31 días. ";
		break;
		case "Junio":
			mensaje = " si tiene 30 días.";
		break;
		case "Julio":
			mensaje = " si tiene 31 días. ";
		break;
		case "Agosto":
			mensaje = " si tiene 31 días.";
		break;
		case "Septiembre":
			mensaje = " si tiene 30 días.";
		break;
		case "Octubre":
			mensaje = " si tiene 31 días. ";
		break;
		case "Noviembre":
			mensaje = " si tiene 30 días.";
		break;
		case "Diciembre":
			mensaje = " si tiene 31 días. ";
		break;
	
	}

	alert(mensaje);


}
	



