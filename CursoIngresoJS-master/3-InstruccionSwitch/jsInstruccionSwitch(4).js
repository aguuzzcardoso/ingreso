function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
switch (mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert ("30 días")
		break;
	case "Febrero":
		alert ("28 días")
		break;
	default:
		alert ("31 días")
		break;

}



}//FIN DE LA FUNCIÓN