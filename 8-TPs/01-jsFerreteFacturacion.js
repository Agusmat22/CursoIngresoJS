//NOMBRE AGUSTIN MATIAS GARCIA NAVAS
/*1.	Para el departamento de facturación:  
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
   //asigno las variables
   let precio1;
   let precio2;
   let precio3;
   let resultado;
   let mensaje;

    //tomamos el dato que ingrese el usuario
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    //transformamos el strings a entero
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    //realizamos la suma de los datos ingreasados
    resultado = precio1 + precio2 + precio3 ;

    //creamos el mensaje para que el usuario lo visualice
    mensaje = ("La suma es " + resultado);

    //muestro la informacion
    alert(mensaje);
}

function Promedio () 
{   
    //asigno las variables
   let precio1;
   let precio2;
   let precio3;
   let resultado;
   let mensaje;

    //tomamos el dato que ingrese el usuario
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    //transformamos el strings a entero
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    //realizamos la suma de los datos ingreasados
    resultado = (precio1 + precio2 + precio3)/3 ;

    //creamos el mensaje para que el usuario lo visualice
    mensaje = ("El promedio es " + resultado);

    //muestro la informacion
    alert(mensaje);
	
}
function PrecioFinal () 
{
    //asigno las variables
    let precio1;
    let precio2;
    let precio3;
    let sumaDePrecios;
    let precioConIva;
    let precioFinal;
    let mensaje;

    //tomamos el dato que ingrese el usuario
    precio1 = document.getElementById("txtIdPrecioUno").value;
    precio2 = document.getElementById("txtIdPrecioDos").value;
    precio3 = document.getElementById("txtIdPrecioTres").value;

    //transformamos el strings a entero
    precio1 = parseFloat(precio1);
    precio2 = parseFloat(precio2);
    precio3 = parseFloat(precio3);

    //realizamos la suma de los datos ingreasados
    sumaDePrecios = precio1 + precio2 + precio3 ;

    //Calculamos solo el valor del precio del Iva
    precioConIva = (sumaDePrecios*21)/100;

    //El valor final
    precioFinal = sumaDePrecios + precioConIva;
    
    //creamos el mensaje para que el usuario lo visualice
    mensaje = ("La suma es " + precioFinal);

    //muestro la informacion
    alert(mensaje);
	
}