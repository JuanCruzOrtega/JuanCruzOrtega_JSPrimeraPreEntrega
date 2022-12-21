let productoElegido = ""
let cantidadElegida = 0
let precio = 0
let precioTotal = 0
let compraMas = false;

alert("Ingrese la opción que desea comprar, sino ingrese 0")
productoElegido = parseInt(prompt("1- hamburguesa con cheddar ($1300), 2- hamburguesa con bacon ($1500), 3- hamburguesa clasica ($1500)"));

const cantidad = (cant, precio) => {
    return cant * precio;
}

const totalEnvio = () => {
    let conEnvioADomicilio = false;
    conEnvioADomicilio = confirm("Queres envío a domicilio?")


    if (conEnvioADomicilio && precio >= 3000) {
        alert("El envío es gratis, el total es $" + (precio))
    } else if (conEnvioADomicilio && precio < 3000) {
        alert("El costo de envío es 400, el total es $" + (precio + 400))
    } else {
        alert("Podes pasarlo a retirarlo. El pedido estara listo en aproximadamente 30 minutos")
    }
}



    while (productoElegido != "0") {
        switch (productoElegido) {
            case 1:
                cantidadElegida = parseInt(prompt("Elegiste hamburguesa con cheddar. ¿Cuantas queres llevar?"))
                precio += cantidad(cantidadElegida, 1300)
                break;
            case 2:
                cantidadElegida = parseInt(prompt("Elegiste hamburguesa clasica. ¿Cuantas queres llevar?"))
                precio += cantidad(cantidadElegida, 1500)
                break;
            case 3:
                cantidadElegida = parseInt(prompt("Elegiste hamburguesa clasica. ¿Cuantas queres llevar?"))
                precio += cantidad(cantidadElegida, 1500)
                break;
            default:
                productoElegido = 0;
                cantidadElegida = 0;
                break;
        }
        productoElegido = parseInt(prompt("1- hamburguesa con cheddar ($1300), 2- hamburguesa con bacon ($1500), 3- hamburguesa clasica ($1500). Para salir ingresa 0"));
    }

precioTotal = totalEnvio()