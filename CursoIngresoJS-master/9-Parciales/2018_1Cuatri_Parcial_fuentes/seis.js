function mostrar()
{
    var hora = document.getElementById('laHora').value;
    var mensaje = "";

    switch(hora)
    {
        case "7":
        case "8":
        case "9":
        case "10":
            mensaje = "es de mañana";
            break;
        case "11":
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
            mensaje = "es de tarde";
            break;
        case "19":
        case "20":
        case "21":
        case "22":
        case "23":
            mensaje = ". A dormir!";
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            mensaje = "es de noche" + mensaje;
            break;
        default:
            mensaje = "la hora ingreseda no es correcta";
    }

    alert(mensaje);

}
