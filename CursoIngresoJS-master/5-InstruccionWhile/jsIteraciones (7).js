function mostrar()
{
	var contador=0;
	var acumulador=0;
	debugger;
	var respuesta

	while(respuesta !="no")
	{	
		respuesta=prompt("Ingrese un numero, de lo contrario ingrese 'no'");
		respuesta=parseInt(respuesta);
		acumulador = acumulador + respuesta;
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	/*
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	debugger;

	respuesta = prompt ("Ingrese un numero.");

	while (respuesta !="si")
	{	
		acumulador = prompt ("Ingrese un numero. De lo contrario ingrese si");
		acumulador = acumulador + respuesta;
		contador=contador+1;
	}
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	*/
}//FIN DE LA FUNCIÓN