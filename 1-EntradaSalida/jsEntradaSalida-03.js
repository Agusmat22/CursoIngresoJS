// NOMBRE: AGUSTIN MATIAS GARCIA NAVAS

/* SEMANA 1 
Aspectos a evaluar:
Uso correcto de métodos de entrada y salida de datos (alert, prompt, document.getElementById)
Uso correcto de variables y sus identificadores (nombres de variables)
Concatenación
Uso de parseInt / parseFloat
Cálculo de porcentajes

Se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento y el total a pagar. */

function mostrar()
{
	var valorCompra;
	var iva;
	var descuento;
	var importeDelIva;
	var importeConIva;
	var importeConDescuento;
	//var importeBruto;
	var totalPagar;
	var mensaje;
	

	//valores de porcentaje, compra mayorista -5% 
	iva = 21;
	descuento = 5;

	valorCompra = document.getElementById("txtIdNombre").value;

	valorCompra = parseFloat(valorCompra);

	//valor del iva en la compra
	importeDelIva = (valorCompra * iva)/100;

	//valor del descuento
	valorDescuento = (valorCompra * descuento)/100;

	//importe con el IVA
	importeConIva = valorCompra + importeDelIva;

	//importe de la compra mas el descuento
	importeConDescuento = valorCompra - valorDescuento ;

	importeBruto = valorCompra ;

	totalPagar = valorCompra + importeDelIva - valorDescuento;
	
	mensaje = "El importe en bruto es: " + importeBruto + "\r El valor del IVA es: " + importeDelIva + "\r El importe con IVA es: " + importeConIva + "\r El valor del descuento es: " + valorDescuento + "\r El total a pagar es: " + totalPagar ;

	alert (mensaje);


}
	



