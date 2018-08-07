function mostrar()
/*
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.+
*/
{
    var animal;
    var peso=0;
    var temperatura=0;
    var temperaturapar=0;
    var temperaturabajocero=0;
    var promediopeso=0;
    var cantidad=0;
    var sumapeso=0;
    var animalpesado;
    var tempanimalpesado=0;
    var pesopesado=0;
    var primer=true;
    var animalpesminb0=0;
    var animalpesmaxb0=0;

    debugger;

    while(animal != "salir")
    {
        animal=prompt("Ingrese el nombre de un animal, de lo contrario escriba'salir'");
        if(animal == "salir")
        {
            break;
        }       
        peso=prompt("Ingrese el peso de animal entre 1 y 1000.");
        peso=parseInt(peso);
        while (isNaN(peso) || peso < 0 || peso > 1000)
        {
            peso=prompt("Ingrese el peso correcto del animal entre 1 y 1000")
        }
        temperatura=prompt("Ingrese la temperatura del habitat entre -30 y 30");
        temperatura=parseInt(temperatura);
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30)
        {
            temperatura=prompt("Ingrese la temperatura correcta del habitat entre -30 y 30");
        }
        
        if(temperatura % 2 == 0 )
        {
            temperaturapar++;
        }
        if(temperatura < 0)
        {
            temperaturabajocero++;
            if(primer)
            {
                animalpesminb0=peso;
                animalpesmaxb0=peso;
            }
            else if (peso > animalpesmaxb0)
            {
                animalpesmaxb0=peso;
            }
            else if (peso < animalpesminb0)
            {
                animalpesminb0=peso;
            }
        }
    
        if(primer)
        {
            animalpesado=animal;
            tempanimalpesado=temperatura;
            pesopesado=peso;
            primer=false;
        }
        else if (peso > pesopesado)
        {
            animalpesado=animal;
            tempanimalpesado=temperatura;
            pesopesado=peso;
        }            
        cantidad++;
        sumapeso+=peso;
    }
    promediopeso=sumapeso / cantidad;
}
