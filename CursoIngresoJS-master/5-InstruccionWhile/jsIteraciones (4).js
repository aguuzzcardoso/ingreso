function mostrar()
{

	var numero = -1;
	debugger;

	while (numero <0 || numero >9)
	{
		numero = prompt("ingrese un número entre 0 y 9, por favor.")
		numero=parseInt(numero);	
	}
	document.getElementById('Numero').value = numero

}//FIN DE LA FUNCIÓN