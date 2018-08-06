function mostrar()
{
    var nota=0;
    var sexo;
    var contador=0;
    var promedio;
    var totaldenotas=0;
    var varonesaprobados=0;
    var notabajaf=0;
    var notabajam=0;
    var primeraf=true;
    var primeram=true;
    debugger;

    while (contador <5)
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
        if (sexo == "f")
        {
            while(primeraf)
            {
                notabajaf=nota;
                primeraf=false;
            }
            if(primeraf=false && nota < notabajaf)
            {
                notabajaf=nota;
            }
        }
        else
        {
            while(primeram)
            {
                notabajam=nota;
                if (nota >=6)
                {
                    varonesaprobados++;
                }
                primeram=false;
            }
            if(primeram=false && nota < notabajam)
            {
                notabajam=nota;
            }
        }
        totaldenotas=parseInt(totaldenotas);
        totaldenotas+=nota;
        contador++;
        promedio=totaldenotas/contador;
    }
    
    alert(
        "El promedio de las notas es: "+ promedio +
        ". La nota mas baja femenina fue: " + notabajaf +
        ". La nota mas baja masculina fue: " + notabajam +
        ". La cantidad de varones aprobados es: "+ varonesaprobados
        )

}
