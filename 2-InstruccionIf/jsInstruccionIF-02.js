////nombre: Agustin garcia navas
function mostrar()
{
	
	var edad;

	edad = document.getElementById("txtIdEdad").value; 
	
	edad = parseInt(edad);

	edad = parseInt(edad);
	// "if" si la condicion SI se cumple ....  
	if( edad >= 18)
	{
		alert("Usted es mayor de edad");
	} // "else" si la condicion NO se cumple....
	else 
	{
		alert("Usted es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN

/* 
== igual
    != distinto
    >mayor
    < menor
    >= mayor o igual
    <= menor o igual
    === estrictamente igual
    && y logica 
    || o logica
	*/