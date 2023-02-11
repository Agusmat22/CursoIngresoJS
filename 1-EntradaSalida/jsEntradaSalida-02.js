/* NOMBRE 

Semana 2
Ejercicio 1
Aspectos a evaluar:
Uso correcto de métodos de entrada y salida de datos (alert, prompt, document.getElementById)
Uso correcto de variables y sus identificadores (nombres de variables)
Concatenación
Uso de parseInt / parseFloat
Condicionales simples y dobles.
Uso de operadores aritméticos, relacionales y lógicos.

Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa, para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa, en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad, menores o iguales a 80

A tener en cuenta: Si preguntamos la altura del usuario y no puede subir no deberíamos preguntarle la edad.
 */
function mostrar() 
{
	var altura;
	var edad;
	var mensaje;
	var precioEntradas;


	altura = prompt("Ingrese su altura");

	//edad = prompt("Ingrese su edad");

	altura = parseFloat(altura);

	if (altura < 120) 
	{
		mensaje = "Usted no puede subirse a la montaña rusa"
	}
	else 
	{	
		//consulto la edad, ya que tiene una altura mayor a 120
		edad = prompt("Ingrese su edad");

		edad = parseInt(edad);

		if (edad < 18 || edad > 80) 
		{
			precioEntradas = 200;

			mensaje = "Usted debera abonar $" + precioEntradas;
		}
		else 
		{
			precioEntradas = 400;

			mensaje = "Usted debera abonar $" + precioEntradas;
		}

	}


	alert(mensaje);

}

