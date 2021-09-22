/*Funciones necesarias para tienda HardBuy*/

/* Validador entre intervalos */
const validator = (numMin, number, numMax) => {
    while (number < numMin || number > numMax || number == ""){
        number = parseInt(prompt(`Error! se le ha pedido un número entre ${numMin} y ${numMax} ingrese nuevamente: `))
    }
    return number
}

/* Calcular IVA */
const calcIva = (prize) => {
    prize *= 1.21;
    return prize
}

/* Datos tarjeta de débito */
const tarjetaDebito = () => {
    names = prompt("Ingrese el nombre del titular: ");
    surname = prompt("Ingrese el apellido del titular: ");
    code = prompt("Ingrese los 16 dígitos de su tarjeta: ");
    expirationDate = prompt("Ingrese fecha de vencimiento: ");
    cvc = prompt("Ingrese el código de seguridad: ");
}

/* Datos tarjeta crédito */
const tarjetaCredito = (instalments) => {
    tarjetaDebito()
    let interest = 1;
    if (instalments <= 3){
        cart *= 1.07;
        alert(`El precio final es ${Math.round(cart * 1.07)}`);
    }
    else if(instalments>3 && instalments <= 6){
        cart *= 1.14;
        alert(`El precio final es ${Math.round(cart * 1.14)}`);
    }
    else if(instalments>6 && instalments <= 12){
        cart *= 1.24;
        alert(`El precio final es $${Math.round(cart * 1.24)}`);
    }
}

/* Forma de pago */
const methodPayment = (payment) => {
    switch(payment){
        case 1:
            alert("Para realizar un pago en efectivo dirígase a una sucursal de rapipago/pagofacil y bríndele este código al cajero '0354184484414' ");
            break
        case 2:
            alert("Para realizar un pago en mediante transferencia bancaria utilice el siguiente CBU: '0001547245000124035785' o ALIAS: 'Hardbuy.tienda.hardware' ")
            break
        case 3:
            tarjetaDebito();
            break
        case 4:
            instalments = parseInt(prompt("Ingrese número de cuotas: "));
            tarjetaCredito(instalments);
            break
    }
}

/*Esta funcion ejecuta el agregado de los productos seleccionados al carrito*/
/*Contiene en las estructuras de control una condición consultando por el producto elegido, consultando stock y actualizándolo*/

const addToCart = (option, choice,quantity) =>{
    switch(option){
        /* Opción microprocesadores */
        case 1:
            if (choice == 1 && ryzen5600.stock(quantity)){
                cart += (quantity*ryzen5600.iva());
                ryzen5600.stockProducto -= quantity;
                alert(`${ryzen5600.producto} agregado al carrito`);
            }
            else if (choice == 2 && ryzen5800.stock(quantity)){
                cart += (quantity*ryzen5800.iva());
                ryzen5800.stockProducto -= quantity;
                alert(`${ryzen5800.producto} agregado al carrito`);
            }
            else if (choice == 3 && i9900.stock(quantity)){
                cart += (quantity*i9900.iva());
                i9900.stockProducto -= quantity;
                alert(`${i9900.producto} agregado al carrito`);
            }
            break

        /* Opción memorias ram */
        case 2:
            if (choice == 1 && hyperx3200.stock(quantity)){
                cart += (quantity*hyperx3200.iva());
                hyperx3200.stockProducto -= quantity;
                alert(`${hyperx3200.producto} agregado al carrito`);
            }
            else if (choice == 2 && patriotViper.stock(quantity)){
                cart += (quantity*patriotViper.iva());
                patriotViper.stockProducto -= quantity;
                alert(`${patriotViper.producto} agregado al carrito`);
            }
            else if (choice == 3 && adata3600.stock(quantity)){
                cart += (quantity*adata3600.iva());
                adata3600.stockProducto -= quantity;
                alert(`${adata3600.producto} agregado al carrito`);
            }
            break

        /* Opción motherboards */
        case 3:
            if (choice == 1 && gigabyteB450.stock(quantity)){
                cart += (quantity*gigabyteB450.iva());
                gigabyteB450.stockProducto -= quantity;
                alert(`${gigabyteB450.producto} agregado al carrito`);
            }
            else if (choice == 2 && asusB560.stock(quantity)){
                cart += (quantity*asusB560.iva());
                asusB560.stockProducto -= quantity;
                alert(`${asusB560.producto} agregado al carrito`);
            }
            else if (choice == 3 && msiZ490.stock(quantity)){
                cart += (quantity*msiZ490.iva());
                msiZ490.stockProducto -= quantity;
                alert(`${msiZ490.producto} agregado al carrito`);
            }
            break

        /* Opción placas de video */
        case 4:
            if (choice == 1 &&  palitGtx1660.stock(quantity)){
                cart += (quantity*palitGtx1660.iva());
                palitGtx1660.stockProducto -= quantity;
                alert(`${palitGtx1660.producto} agregado al carrito`);
            }
            else if (choice == 2 && msiRtx3060ti.stock(quantity)){
                cart += (quantity*msiRtx3060ti.iva());
                msiRtx3060ti.stockProducto -= quantity;
                alert(`${msiRtx3060ti.producto} agregado al carrito`);
            }
            else if (choice == 3 && msiRadeonRx6700.stock(quantity)){
                cart += (quantity*msiRadeonRx6700.iva());
                msiRadeonRx6700.stockProducto -= quantity;
                alert(`${msiRadeonRx6700.producto} agregado al carrito`);
            }
            break
    }
    return true;
} 





