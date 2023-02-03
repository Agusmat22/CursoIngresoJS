/* Agustin Garcia
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;
	let mensaje

	dividendo = parseFloat(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseFloat(document.getElementById("txtIdNumeroDivisor").value);

	// el % sirve para sacar el resto de una division
	resto = dividendo % divisor;

	// la opcion del ${} sirve pero hay que enteder los fundamentos  pero en la cursada solicitan la otra opcion
	//alert (`El resto es ${resto}`);

	//esta opcion es la que solicitan en la cursada
	mensaje = "El valor del resto es " + resto ;

	alert(mensaje);

}
