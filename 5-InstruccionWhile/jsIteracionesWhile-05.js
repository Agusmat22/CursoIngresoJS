/* NOMBRE: AGUSTIN GARCIA NAVAS
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	
	//declaro variable
	var sexoIngresado;
	
	//tomo el dato
	sexoIngresado = prompt("Ingrese su Sexo si es Femenino o Masculino");

	//proceso la informacion
	while(sexoIngresado != "Femenino" && sexoIngresado != "Masculino"  )
	{
		sexoIngresado = prompt("[ERROR]Ingrese su Sexo si es Femenino o Masculino");
	}

	//informo
	document.getElementById("txtIdSexo").value = sexoIngresado;



}//FIN DE LA FUNCIÓN