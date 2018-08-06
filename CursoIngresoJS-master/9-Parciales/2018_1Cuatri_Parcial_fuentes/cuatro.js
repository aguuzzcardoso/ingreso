function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;
    debugger;

    numeroUno=prompt("Ingrese el primer numero");
    numeroDos=prompt("Ingrese el segundo numero");

    if (numeroUno == numeroDos)
    {
        resultado=numeroUno+numeroDos;
    }
    else 
    {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        if (numeroUno > numeroDos)
        {    
            resultado=numeroUno-numeroDos;
        }
        else if (numeroUno < numeroDos)
        {
            resultado=numeroUno+numeroDos;
            if (resultado > 10)
            {
                alert("La suma es "+ resultado +" y supero el 10.")
            }
        }
    }
    alert("El resultado es "+ resultado);
}
