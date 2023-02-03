/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{  
    let precio1;
    let precio2;
    let precio3;
    let sumaTotal;
    let mensaje;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaTotal = precio1 + precio2 + precio3;

    // la opcion del ${} sirve pero hay que enteder los fundamentos  pero en la cursada solicitan la otra opcion
    //alert(`La suma total es ${SumaTotal}`);
    
    mensaje = "La suma total es " + sumaTotal;
    alert(mensaje);
	
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let promedio;
    let mensaje;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precio1 + precio2 + precio3)/3;

    // la opcion del ${} sirve pero hay que enteder los fundamentos  pero en la cursada solicitan la otra opcion
    //alert(`El promedio es ${promedio} `);

    mensaje = "El promedio es " + promedio;
    alert(mensaje);
	
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let total;
    let totalConIva;
    let mensaje;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    total= (precio1 + precio2 + precio3);
    
    totalConIva = total + (total*21)/100;

    // la opcion del ${} sirve pero hay que enteder los fundamentos  pero en la cursada solicitan la otra opcion
    //alert(`El resultado es ${totalConIva} `);

    mensaje = "El precio final es " + totalConIva;
    alert(mensaje);
	
}