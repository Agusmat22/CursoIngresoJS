function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if( edad == 15)
	{
		alert("Tiene 15 años");
	}else 
	{
		alert("No tiene 15 años");
	}

}//FIN DE LA FUNCIÓN


/*
	if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= === !== == !=
	operadores logicos
    condicionUno	&&  condicionDos        f   ||   f            !
	y logica                                o logica         negacion

	&& esto significa "y"
*/
