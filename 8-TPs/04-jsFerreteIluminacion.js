//NOMBRE: AGUSTIN GARCIA NAVAS

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    // txtIdCantidad
    // Marca
    // txtIdprecioDescuento

    var marcaLampara; 
    var cantidadLamparas;
    var VALOR_LAMPARAS = 35;
    var descuento = 0;
    var valorSinDescuento;
    var descuentoDelPrecio;
    var IIBB_IMPUESTO = 10;
    var precioFinal;
    var precioDelImpuesto;
    var precioConImpuesto;

    //tomo el dato
    cantidadLamparas = document.getElementById("txtIdCantidad").value;

    //tomo el dato que selecciona
    marcaLampara = document.getElementById("Marca").value;

    //pasamos el strings a un entero
    cantidadLamparas = parseInt(cantidadLamparas);

    if (marcaLampara == "ArgentinaLuz") //Solamente si esta condicion se cumple "ArgentinaLuz" ingresa a las cantidades de lamparas del mismo
    {
        if(cantidadLamparas == 5) // 
        {
            descuento = 40;
        }
        else
        {
            if(cantidadLamparas == 4)
            {
                descuento = 25;
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    descuento = 15;
                }                             
            }
        }

    }
    else 
    {
        if(marcaLampara == "FelipeLamparas") //Solamente si esta condicion se cumple "FelipeLamparas" ingresa a las cantidades de lamparas del mismo
        {
            if(cantidadLamparas == 4)
            {
                descuento = 25;
            }
            else
            {
                if(cantidadLamparas == 3)
                {
                    descuento = 10;
                }
            }
        }
        else // en este "else" no se encuentra ni FelipeLamparas ni ArgentinaLuz, por ende se calcula todas las otras marcas
        {
            if(cantidadLamparas == 5)
            {
                descuento= 30;
            }
            else
            {
                if(cantidadLamparas == 4)
                {
                    descuento= 20;
                }
                else
                {
                    if(cantidadLamparas == 3)
                    {
                        descuento = 5;
                    }
                }
            }

        }
    }

    //este calculo sirve para todas las cantidades que esten fuera de las condiciones se calculen igualmente sin descuento
    valorSinDescuento = cantidadLamparas * VALOR_LAMPARAS ;   

    //el valor final del descuento 
    descuentoDelPrecio = (valorSinDescuento * descuento)/100 ;

    //el valor mas el descuento
    precioFinal = valorSinDescuento - descuentoDelPrecio ;

    if (precioFinal > 120)
    {   
        //valor Del impuesto segun el precio ingresado
        precioDelImpuesto = (precioFinal * IIBB_IMPUESTO)/100;

        precioConImpuesto = precioFinal + precioDelImpuesto;

        alert("IIBB Usted pago $" + precioDelImpuesto + " siendo $" + precioConImpuesto +" el impuesto que se pagó");
    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;
    
}


// LINK DE MI CODIGO SOLAMENTE CON IF SIN OPERADORES LOGICOS = https://onlinegdb.com/arCLKQW24 
// LINK DE MI CODIGO CON IF Y OPERADORES LOGICOS = https://onlinegdb.com/H9lZlLXiE










