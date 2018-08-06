function mostrar()
{
    var planeta = prompt("Ingrese un planeta del Sistema Solar")

    switch(planeta)
    {
        case "mercurio":
        case "venus":
        alert("acá hace más calor");
        break;
        case "tierra":
        alert("acá vivimos");
        break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        alert ("acá hace mas frio");
        break;
        default:
        alert("Planeta invalido"); 
    }
}
