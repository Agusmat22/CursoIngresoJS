/* NOMBRE: AGUSTIN GARCIA NAVAS
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar()
{
	//txtIdEstacion
	// txtIdDestino

	var valorEstadia = 15000;
	var estacion;
	var destino;
	var aumento = 0;
	var descuento = 0;
	var precioFinal

	estacion = document.getElementById("txtIdEstacion").value; 
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento = 20;
				break;

				case "Cataratas":
				case "Cordoba":
					descuento = 10;
				break;

				case "Mar del plata":
					descuento = 20;
				break;
			}
		break;

		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento = 20;
				break;
	
				case "Cataratas":
				case "Cordoba":
					aumento = 10;					
				break;
	
				case "Mar del plata":
					aumento = 20;
				break;
			}
		break;
		
		default: //estacion Otoño y primavera
			switch(destino)
			{					
				case "Bariloche":		
				case "Cataratas":
				case "Mar del plata":
					aumento = 10;
				break;		
			}
		break;

	}


	aumento = (valorEstadia * aumento) / 100;

	descuento = (valorEstadia * descuento) / 100;

	precioFinal = valorEstadia + aumento - descuento;

	alert(precioFinal);
	

			













	

}//FIN DE LA FUNCIÓN