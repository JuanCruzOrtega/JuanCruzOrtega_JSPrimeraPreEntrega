let productoElegido = ""
let cantidadElegida = 0
let precio = 0
let precioTotal = 0
let compraMas = "false"

alert("Ingrese la opción que desea comprar, sino ingrese 0")
productoElegido = parseInt(prompt("1- hamburguesa con cheddar ($1300), 2- hamburguesa con bacon ($1500), 3- hamburguesa clasica ($1500)"));

const cantidad = (cant, precio) => {
    return cant * precio;
}

const totalEnvio = () => {
    if (precio >= 3000){
        alert("El envío es gratis")
    } else{
        precio <= 2999
        alert("El costo de envío es 400, el total es " + (precio + 400) )
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
            break;
    }
    productoElegido = parseInt(prompt("1- hamburguesa con cheddar ($1300), 2- hamburguesa con bacon ($1500), 3- hamburguesa clasica ($1500). Para salir ingresa 0"));
}

//alert("El total de la compra es " + precioTotal)

precioTotal = totalEnvio()