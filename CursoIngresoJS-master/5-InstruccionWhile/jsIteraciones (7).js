function mostrar()
{

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

}//FIN DE LA FUNCIÓN