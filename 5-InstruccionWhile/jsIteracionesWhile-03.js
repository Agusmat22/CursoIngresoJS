/* NOMBRE: AGUSTIN GARCIA NAVAS

EJERCICIO 3 BIS

Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750), 3 intentos (mostrar cuantos les queda) 
*/
function mostrar()
{
	var clave = "utn750";
	var claveUsuario;
	var intentos= 0;
	var mensaje;

	claveUsuario = prompt("Ingrese la clave");

	while(claveUsuario != clave && intentos != 3)
	{	
		intentos++;  // esto es igual a intentos = intentos + 1
		claveUsuario = prompt("[ERROR], tiene 3 intentos y usted ya ingreso "+ intentos + ", Ingrese la clave");
	
	}

	mensaje = "No puede ingresar a la pagina";

	if(claveUsuario == clave)
	{
		mensaje = "Ingreso correctamente";
	}

	
	

	alert(mensaje);



	
}//FIN DE LA FUNCIÓN


/*
function mostrar()
{
	var clave = "utn750";

	clave = prompt("Ingrese la clave");

	//el while es un BUCLE por ende se va ejecutar infinitamente hasta que se ingrese la clave "utn750" entonces dara un false y saldra del bucle
	while(clave != "utn750")
	{
		clave = prompt("Error, ingrese nuevamente");
	}

	mensaje = "Ingreso correctamente la clave";

	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
*/