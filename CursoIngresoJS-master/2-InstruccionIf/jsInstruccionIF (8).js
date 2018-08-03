function mostrar()
{
//tomo la edad  
    var edad = document.getElementById('edad').value;
    var estadocivil = document.getElementById('estadoCivil').value;

    if (edad >17 && estadocivil == "Soltero")
    {
        alert("Es soltero y no es menor de edad")
    }
}//FIN DE LA FUNCIÓN