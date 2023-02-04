/*2.	Para el departamento de Construcción:  AGUSTIN GARCIA NAVAS
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   
    //asigno variable
    var largoAlambre;
    var anchoTerreno;
    var rectanguloAlambre;
    var mensaje;

    //tomo el dato
    largoAlambre = document.getElementById("txtIdLargo").value;
    anchoTerreno = document.getElementById("txtIdAncho").value;

    //transformo un strings en un entero
    largoAlambre = parseInt(largoAlambre);
    anchoTerreno = parseInt(anchoTerreno);

    //calculo la  base * altura para obertener el rectangulo
    rectanguloAlambre = largoAlambre * anchoTerreno;

    mensaje = "La cantadidad de alambre que debera comprar es: " + rectanguloAlambre ;

    alert(mensaje);
}

//mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.

function Circulo () 
{   
    //NUMERO PI 3.141

    var radioTerreno;
    var diametroTerreno;
    var numeroPi;
    var circunferenciaTerreno;
    var reduccionDecimal;
    var mensaje; 

    numeroPi = 3.14 ;

    //tomamos el dato
    radioTerreno = document.getElementById("txtIdRadio").value;

    //transformamos de string a entero
    radioTerreno = parseInt(radioTerreno);

    //calculamos el diametro
    diametroTerreno = radioTerreno * 2 ;
  
    //calculamos la circunferencia  C= pi*diametro
    circunferenciaTerreno = diametroTerreno * numeroPi ;

    //reduzco la cantidad de decimales despues de la , a dos
    reduccionDecimal = circunferenciaTerreno.toFixed(2);

    mensaje = "La cantidad de alambre que debera comprar es: " + circunferenciaTerreno;

    alert(mensaje);
	
}

// C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
function Materiales () 
{
    var ancho;
    var largo;
    var area;
    var cemento;
    var cal;
    var bolsaCemento;
    var bolsaCal;
    var mensaje;

    //asignamos el valor de consumo por 1mt cuadrado
    cemento = 2;
    cal= 3;
    
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    bolsaCemento = area * cemento;
    bolsaCal = area * cal ;

    mensaje = "Usted necesitara " + bolsaCemento + " bolsas y " + bolsaCal + " bolsas de cal"; 

    alert(mensaje);



	
}