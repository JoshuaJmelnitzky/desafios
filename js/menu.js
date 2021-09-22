/*Este archivo contiene las variables generales para el desarrollo de tienda de hardware "HardBuy"*/

/* Menú principal de opciones */
const menu = `Escoge un Producto:
1.-Microprocesador
2.-Memoria RAM
3.-Motherboards
4.-Placa de video
5.-Salir
`;


/* productos */
const products = (option) => {
    let choice = null;
    optionVal = validator(1, option, 5);
    switch (optionVal){
        case 1:
            choice = `Microprocesadores
            1.-Ryzen 5 5600x
            2.-Ryzen 7 5800x
            3.-Intel i9 9900k
            `;
            return choice
        case 2: 
            choice = `Memorias RAM
            1.-Hyperx fury 16gb 3200mhz
            2.-Patriot Viper 16gb 3200mhz
            3.-Adata 8gb 3600mhz
            `;
            return choice
        case 3: 
            choice = `Motherboards
            1.-Gigabyte B450 aorus elite
            2.-Asus TUF B560b-plus
            3.-MSI Z490 
            `;
            return choice
        case 4: 
            choice = `Placa de video
            1.-Palit GTX 1660
            2.-MSI RTX 3060 ti ventus
            3.-MSI Radeon RX 6700
            `;  
            return choice
        case 5:
            return "Gracias por utilizar el sistema"
    }
}


const SelectedQty = 'Ingrese la cantidad a adquirir: ';

const payment = `Forma de pago:
1.-Efectivo
2.-Transferencia bancaria
3.-Tarjeta de débito
4.-Tarjeta de crédito
`;

/* Listado de productos y  */

class Product {
    constructor (producto, precio, stockProducto){
        this.producto = producto;
        this.precio = precio;
        this.stockProducto = stockProducto;
    }
    stock(quantity){
        if(quantity > this.stockProducto){
            alert(`No tenemos suficiente stock. El stock disponible es ${this.stockProducto}`);
            return false;
        }
        else return true;
    }
    iva(){
        this.precio *= 1.21;
        return this.precio;
    }
}

/* Microprocesadores */
let ryzen5600 = new Product("Ryzen 5600X", 39000, 5);
let ryzen5800 = new Product("Ryzen 5800X", 53000, 2);
let i9900 = new Product("Intel i9-9900K", 60000, 30)

/* Memoria RAK */
let hyperx3200 = new Product("HyperX 3200mhz 16gb", 11500, 6);
let patriotViper = new Product("Patriot Viper 3200mhz 16gb", 10000, 5);
let adata3600 = new Product("Adata 3600mhz 8gb", 7500, 3)

/* Motherboards */
let gigabyteB450 = new Product("Gigabyte B450 aorus elite", 14000, 4);
let asusB560 = new Product("Asus TUF B560b-plus", 15500, 5);
let msiZ490 = new Product("MSI Z490", 17500, 3);

/* Placas de video */
let palitGtx1660 = new Product("Palit GTX 1660", 120000, 20);
let msiRtx3060ti = new Product("MSI RTX 3060 ti ventus", 200000, 16);
let msiRadeonRx6700 = new Product("MSI Radeon RX 6700", 180000,12);


let cart = 0;

let resp = 'SI';