function mostrar()
{
/*
Al presionar el boton, pedir 5 numeros en diferentes prompt e informar
la suma acumulada y el promedio. 
*/

	var contador=0;
	var acumulador=0;

	while(contador <5)
	{
		var numeroIngresado=prompt('Ingrese un numero');
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		acumulador=acumulador+numeroIngresado;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN