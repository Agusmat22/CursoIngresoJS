// NOMBRE: AGUSTIN MATIAS GARCIA NAVAS
/*3.	Para el departamento de Pinturas:  
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   
    var temperaturaFa;
    var temperaturaCe;
    var mensaje;

    //tomamos el dato
    temperaturaFa = document.getElementById("txtIdTemperatura").value;

    //transformamos un strings a un entero
    temperaturaFa = parseInt(temperaturaFa);

    //convertimos de fareheint a celsius
    temperaturaCe = ((temperaturaFa - 32)*5)/9 ;

    //creamos el mensaje
    mensaje = temperaturaFa + " Fahrenheit son " + temperaturaCe + " centigrados ";
    //mostramos el mensaje
    alert(mensaje);
	
}

function CentigradosFahrenheit () 
{
    var temperaturaC;
    var temperaturaF;
    var mensaje; 

    temperaturaC = document.getElementById("txtIdTemperatura").value; 

    temperaturaC = parseInt(temperaturaC);

    //transformamos de celsius a farenheit
    temperaturaF = (temperaturaC *5 /9)+32 ;

    //colocamos un tope despues de la " , " decimal max 2
    temperaturaF = temperaturaF.toFixed(2);
    

    mensaje = temperaturaC + " celsius son " + temperaturaF + " farenheit ";

    alert(mensaje);
	
}
