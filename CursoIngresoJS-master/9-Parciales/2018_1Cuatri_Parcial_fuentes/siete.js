function mostrar()
{
    var nota=0;
    var sexo;
    var contador=0;
    var promedio;
    var totaldenotas=0;
    var varonesaprobados=0;
    var notabaja=0;
    var minsexo="-";
    var primera=true;
    debugger;

    while (contador < 5)
    {   
        nota=prompt("Ingrese otra nota del 1 al 10");
        nota=parseInt(nota);
        while(isNaN(nota) || nota < 0 || nota > 10)
        {
            nota=prompt("El numero es incorrecto. Ingrese nuevamente.");
        }
        sexo=prompt("Ingrese el sexo: f o m.");
        while(sexo != "m" && sexo != "f")
        {
            sexo=prompt("El sexo es incorrecto. Ingrese nuevamente.");
        }

        if (primera) 
        {
            notabaja = nota;
            minsexo = sexo;
            primera = true;
        }
        else if (nota < notabaja)
        {
            notabaja = nota;
            minsexo = sexo;
        }

        if (sexo == "m" && nota >= 6)
        {
            varonesaprobados++;
        }

        totaldenotas += nota;
        contador++;
    }
    promedio=totaldenotas / contador;
    
    alert(
        "El promedio de las notas es: "+ promedio +
        ". La nota mas baja fue: " + notabaja + " de sexo " + minsexo +
        ". La cantidad de varones aprobados es: "+ varonesaprobados
        );

}
/*
1 - parseint de mas
2 - promedio abajo
*/