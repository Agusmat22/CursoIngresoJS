/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;


	//getelemntbyid es la solicitud de identificacion por donde el usuario ingresa el dato y nosotros lo podemos recibir
	nombreIngresado = document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);
	
}


