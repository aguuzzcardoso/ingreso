function mostrar()
/*a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.*/
{
    var letra;
    var numero=0;
    var numerospares=0;
    var numerosimpares=0;
    var numerosceros=0;
    var sumapositivos=0;
    var promediopositovos=0;
    var sumanegativos=0;

    debugger;

    while (letra != "salir")
    {
        letra=prompt("Ingrese una letra. De lo contrario escriba 'salir'");
        
        if(letra != "salir")
        {
            numero=prompt("Ingrese un numero entre -100 y 100. ");
            numero=parseInt(numero);
            while(isNaN(numero) || (numero < -100 || numero > 100))
            {
                numero=prompt("Ingrese un numero correcto.");
                numero=parseInt(numero);
            }

            if(numero % 2 == 0 && numero != 0)
            {
                numerospares++;
                sumapositivos+=numero;
            }
            else
            {
                numerosimpares++;
            }

            if (numero == 0)
            {
                numerosceros++;
            }
                                
            }
            else
            {
                sumanegativos+=numero;
            }
        }
    }
}
