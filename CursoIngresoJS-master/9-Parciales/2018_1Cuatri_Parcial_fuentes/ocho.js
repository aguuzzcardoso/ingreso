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
    var promediopositivos=0;
    var sumanegativos=0;
    var contadorpositivos=0;
    var numeromin=100;
    var numeromax=-100;
    var letramin="";
    var letramax="";

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

            if(numero % 2 == 0)
            {
                numerospares++;
            }
            else
            {
                numerosimpares++;
            }

            if (numero == 0)
            {
                numerosceros++;
            }
            else if (numero <0)
            {
                sumanegativos+=numero;
            }
            else 
            {
                sumapositivos+=numero;
                contadorpositivos++;
            }
            
            if (numero < numeromin)
            {
                letramin=letra;
                numeromin=numero;
            }
            
            if (numero > numeromax)
            {
                letramax=letra;
                numeromax=numero;
            }
        }
    }
    promediopositivos=sumapositivos/contadorpositivos;

    document.write("La cantidad de numeros pares es: "+ numerospares +
    ", la cantidad de numeros impares es: "+ numerosimpares +", la cantidad de ceros es: "
    + numerosceros + ", el promedio de los positivos es: "+ promediopositivos + 
    ", la suma de negativos es: "+ sumanegativos + ", el numero minimo y la letra es: "
    + numeromin + " " + letramin + ", el numero maximo y la letra es: "+ numeromax + " "
    + letramax + ".")
}
