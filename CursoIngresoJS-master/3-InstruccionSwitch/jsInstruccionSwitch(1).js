function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
	case "Enero":
		alert("que comiences bien el año!!!.");
		break;
	
	case "Febrero":
	case "Marzo":
		alert("a clases!!!.");
		break;		
	case "Abril":
	case "Mayo":
	case "Junio":
	case "Julio":
		alert("se vienen las vacaciones!!!.")
		break;
	case "Agosto":
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Felices fiesta!!!.")
		break;	
}

}//FIN DE LA FUNCIÓN