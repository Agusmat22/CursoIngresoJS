/* NOMBRE: AGUSTIN GARCIA NAVAS


el numero debe ingresado debe ser entre 1 y 12. Y lo acumulado no debe ser mayor a 22*/
function mostrar()
{
	var numero;
	var acumuladorCartas;
	var VALOR_FINAL = 22;

	numero = 1;

	acumuladorCartas = 0;

	while ( numero > 0 && numero < 13 && acumuladorCartas < VALOR_FINAL)
	{
		numero = prompt("Ingrese un numero entre 1 y 12");

		numero = parseInt(numero);

		acumuladorCartas += numero;

	}

	mensaje = "Error ingrese nuevamente un numero entre 1 y 12";

	if( acumuladorCartas > 21)
	{
		mensaje = "Usted supero la cantidad de cartas"
	}

	alert(mensaje);





}//FIN DE LA FUNCIÓN

//contador = numero + 1 || numero++ 
/* ejemplo 

break rompe la funcion while y sale

var numero = 0;

console.log(numero++);  0	//WHILE ES COMO UN "MIENTRAS ESA CONDICION SE CUMPLA"
console.log(numero++);  1   // UN IF ES "SI ESA CONDICCION SE CUMPLE"
console.log(numero++);  2
console.log(numero++);  3
console.log(numero++);  4     //UN WHILE PUEDE CONTENER ADENTRO UN IF, SWITCH
console.log(numero++);  5
console.log(numero++);  6 
console.log(numero++);  7
console.log(numero++);  8

while() // esto es un BUCLE, UNA CONDICION
{

}


*/