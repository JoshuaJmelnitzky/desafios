/*Este archivo contiene las variables generales para el desarrollo de Fruteria Online*/

const menu = `Escoge un Producto:
1.-Microprocesador
2.-Memoria RAM
3.-Motherboards
4.-Placa de video
5.-Salir
`;

const products = (option) => {
    let choice = null;
    if (option == 1){
        choice = `Microprocesadores
        1.-Ryzen 5 5600x
        2.-Ryzen 7 5800x
        3.-Intel i9 9900k
       `
    }
    else if (option == 2){
        choice = `Memorias RAM
        1.-Hyperx fury 16gb 3200mhz
        2.-Patriot Viper 16gb 3200mhz
        3.-Adata 8gb 3600mhz
       `
    }
    else if (option == 3){
        choice = `Motherboards
        1.-Gigabyte B450 aorus elite
        2.-Asus TUF B560b-plus
        3.-MSI Z490 
       `
    }
    else if (option == 4){
        choice = `Placa de video
        1.-Palit GTX 1660
        2.-MSI RTX 3060 ti ventus
        3.-MSI Radeon RX 6700
       `
    }

    return choice
}


const SelectedQty = 'Indicanos la cantidad que deseas';

/*Lista de Precios*/ 

/* Microprocesadores */
const ryzen5600 = 39000;
const ryzen5800 = 53000;
const i99900 = 60000;

/* Memoria RAM */
const hyperx3200 = 11500;
const patriotViper = 10000;
const adata3600 = 7500;

/* Motherboards*/
const gigabyteB450 = 14000;
const asusB560 = 15500;
const msiZ490 = 17500 ;

/* Placas de video */
const palitGtx1660 = 120000;
const msiRTX3060ti = 200000;
const msiRadeonRx6700 = 180000;


/*Lista de Stock*/ 

/* Microprocesadores */
const ryzen5600Stock = 5;
const ryzen5800Stock = 2;
const i99900Stock = 20;

/* Memoria RAM */
const hyperx3200Stock = 6;
const patriotViperStock = 5;
const adata3600Stock = 3;

/* Motherboards*/
const gigabyteB450Stock = 4;
const asusB560Stock = 5;
const msiZ490Stock = 3 ;

/* Placas de video */
const palitGtx1660Stock = 20;
const msiRTX3060tiStock = 16;
const msiRadeonRx6700Stock = 12;

let cart = 0;

let resp = 'S';