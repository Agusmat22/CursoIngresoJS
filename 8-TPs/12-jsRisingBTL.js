/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
	/*ID
	txtIdEdad
	txtIdSexo
	txtIdEstadoCivil
	txtIdSueldo
	txtIdLegajo
	txtIdNacionalidad
	*/

	//definicion de variables
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	var bandera = "es la primera vez" // esto sirve para saber cuando hace la primera vuelta el while

	// EDAD INGRESADA
	edadIngresada = prompt("Ingrese su edad");

	edadIngresada = parseInt(edadIngresada);

	while (isNaN(edadIngresada) == true) 
	{
		edadIngresada = prompt("[ERROR] No ingreso una edad, intente nuevamente");

		edadIngresada = parseInt(edadIngresada);
	}

	while(edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = prompt("[ERROR] debe ingresar una edad entre 17 y 90, intente nuevamente");

		edadIngresada = parseInt(edadIngresada);
	}
	document.getElementById("txtIdEdad").value = edadIngresada;
	
	// SEXO INGRESADO
	sexoIngresado = prompt("Ingrese su Sexo, “M” para masculino y “F” para femenino ");

	while (sexoIngresado != "M" && sexoIngresado != "F") 
	{
		sexoIngresado = prompt("[ERROR] No ingreso un sexo, intente nuevamente “M” para masculino y “F” para femenino ");
	}

	if (sexoIngresado == "M") 
	{
		document.getElementById("txtIdSexo").value = "Masculino";
	}
	else 
	{
		document.getElementById("txtIdSexo").value = "Femenino";
	}


	// ESTADO CIVIL
	estadoCivilIngresado = prompt("Ingrese su estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	while (isNaN(estadoCivilIngresado) == true) 
	{
		estadoCivilIngresado = prompt("[ERROR] No ingreso un numero, intente nuevamente. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}

	while (estadoCivilIngresado < 0 || estadoCivilIngresado > 5) 
	{
		estadoCivilIngresado = prompt("[ERROR] Debe ingresar un numero del 1 al 4, intente nuevamente. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

		estadoCivilIngresado = parseInt(estadoCivilIngresado);

	}

	switch (estadoCivilIngresado) 
	{
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		case 4:
			estadoCivilIngresado = "Viudos";
			break;
	}
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;

	// SUELDO BRUTO
	sueldoBruto = prompt("Ingrese su sueldo bruto");

	sueldoBruto = parseInt(sueldoBruto);

	while (isNaN(sueldoBruto) == true) 
	{
		sueldoBruto = prompt("[ERROR] No ingreso un numero, intente nuevamente ingresar el sueldo bruto");

		sueldoBruto = parseInt(sueldoBruto);
	}

	while (sueldoBruto < 8000) 
	{
		sueldoBruto = prompt("[ERROR] El sueldo debe superar los 8000, intente nuevamente");

		sueldoBruto = parseInt(sueldoBruto);
	}
	document.getElementById("txtIdSueldo").value = sueldoBruto;

	//NUMERO DE LEGAJO

	


	//NACIONALIDAD
	nacionalidad = prompt("Ingrese su Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");

	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") 
	{
		nacionalidad = prompt("[ERROR] Debe ingresar una letra para su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	}

	switch(nacionalidad) 
	{
		case "A":
			nacionalidad = "Argentino";
			break;
		case "E":
			nacionalidad = "Extranjero";
			break;
		case "N":
			nacionalidad = "Nacionalizado";
			break;
	}
	document.getElementById("txtIdNacionalidad").value = nacionalidad;



	




}
