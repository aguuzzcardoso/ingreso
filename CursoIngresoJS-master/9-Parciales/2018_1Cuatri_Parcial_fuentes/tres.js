function mostrar()
{
    var precioInicial;
    var descuento;
    var final;
    debugger;

    precioInicial=prompt("Precio inicial.");
    descuento=prompt("Ingrese el porcentaje de descuento.");
    final=precioInicial * (1 - descuento/100);

    document.getElementById("elPrecioFinal").value=final;

}
