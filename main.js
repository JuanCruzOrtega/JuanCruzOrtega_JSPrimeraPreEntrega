// CARRO //
const carrito = [];

// ARRAY DE PRODUCTOS
const hamburguesas = [
    { id: 1, nombre: "Hamburguesa con cheddar", precio: 1800, cantidad: 0 },
    { id: 2, nombre: "Hamburguesa con bacon", precio: 1800, cantidad: 0 },
    { id: 3, nombre: "Hamburguesa clasica", precio: 2000, cantidad: 0 },
    { id: 4, nombre: "Hamburguesa especial", precio: 2300, cantidad: 0 },
    { id: 5, nombre: "Hamburguesa doble", precio: 2200, cantidad: 0 }
];

//Ordenar la lista por precio de mayor a menor
const ordenarPorPrecio = () => {
    hamburguesas.sort((a, b) => b.precio - a.precio)
    listaOrdenada()
};

//Mostrar lista al usuario
const listaOrdenada = (productos) => {
    const listaDeHamburguesas = hamburguesas.map(productos => {
        return "- " + productos.nombre + "- $" + productos.precio
    })
    alert("Esta es la lista de nuestras hamburguesas:" + '\n\n' + listaDeHamburguesas.join("\n"))
    compraProducto(listaDeHamburguesas)
};

//Validar cantidad de productos
const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert("Debe elegir una opción.")
        } else {
            alert("Debe elegir una opción que no sea 0.")
        }
        cantidad = parseInt(prompt("¿Cuantas queres llevar?"));
    }

    return cantidad;
};

// ELEGIR PRODUCTO
const compraProducto = (listaDeHamburguesas) => {
    let productoElegido = ""
    let cantidadElegida = 0
    let compraMas = false;
    
    do {
        productoElegido = prompt("Ingrese la opción que desea comprar"+("\n")+ listaDeHamburguesas.join("\n"));
        cantidadElegida = parseInt(prompt("¿Cuantas queres llevar?"))

        let cantidadValidada = validarCantidad(cantidadElegida);

        const producto = hamburguesas.find(hamburguesa => hamburguesa.nombre.toLowerCase() === productoElegido.toLowerCase())

        if (producto) {
            sumarAlCarro(producto, producto.id, cantidadElegida)
        } else {
            alert("Lo que eligió no se encuentra en la lista, por favor, escríbalo completo y correctamente")
        }

        compraMas = confirm("¿Queres agregar algo más?")
        console.log(producto)

    } while (compraMas);
    
    devolverCompra()
};

//AGREGAR PRODUCTO AL CARRITO
const sumarAlCarro = (producto, productoId, cantidadElegida) => {
    const repetido = carrito.find (producto => producto.id === productoId)
    if (!repetido) {
        producto.cantidad += cantidadElegida
        carrito.push(producto)
    } else {
        repetido.cantidad += cantidadElegida
    }
};

//MOSTRAR CARRITO Y TOTAL DE LA COMPRA
const devolverCompra = () => {
    const listaProducto = carrito.map(producto => {
        return "- "+ producto.nombre + "\n" + " Cantidad: "+ producto.cantidad
    })
    const mostrarCarro = confirm('Tienes estos productos: '
    +'\n\n'+listaProducto.join('\n\n')
    +'\n\n'+'¿Quieres hacer el pago?')
    

if (mostrarCarro) {
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.precio * producto.cantidad)
    }, 0)
    alert('El total a pagar es: $'+total)
    totalEnvio(total)
} else {
    ordenarPorPrecio()
}
};


// const eliminarProducto = (productoId) => {
//     // Obtener el índice del producto a eliminar
//     const indice = carrito.findIndex(producto => producto.id === productoId);
//     // Eliminar el producto del carrito
//     carrito.splice(indice, 1);
// }

const totalEnvio = (total) => {
    let conEnvioADomicilio = false;
    conEnvioADomicilio = confirm("Queres envío a domicilio?");


    if (conEnvioADomicilio && total >= 3000) {
        alert("El envío es gratis, el total es $" + (total))
    } else if (conEnvioADomicilio && total < 3000) {
        alert("El costo de envío es 400, el total es $" + (total + 400))
    } else {
        alert("Podes pasarlo a retirarlo. El pedido estara listo en aproximadamente 30 minutos. El total es " + (total))
    }
};

ordenarPorPrecio();






