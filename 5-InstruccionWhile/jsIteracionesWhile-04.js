/* NOMBRE : AGUSTIN GARCIA NAVAS
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numero = 9;

	numero = prompt("Ingrese un numero del 0 al 9 inclusive");


	while( numero > 10)
	{	
		numero = prompt("[ERROR] Ingrese un numero del 0 al 9 inclusive");

	}

	document.getElementById("txtIdNumero").value= numero;
	
}//FIN DE LA FUNCIÓN