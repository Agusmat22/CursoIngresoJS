/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato;

	dato = prompt ("Ingrese su nombre");

	//en este caso se invierte los roles ya que el dato ingresado de prompt lo queremos ver visualizado en la caja de texto "ID"
	document.getElementById("txtIdNombre").value = dato;

	
}

