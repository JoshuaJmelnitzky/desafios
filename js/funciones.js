/*Funciones necesarias para tienda HardBuy*/


const isStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}


/*Esta funcion ejecuta el agregado de los productos seleccionados al carrito
option = La opcion seleccionada por el usuario
quantity = La cantidad deseada por el usuario
*/
const addToCart = (option, quantity) => {
    switch(option){
        case 1:
            if(isStock(quantity,mangoStock)){
                cart += (quantity * mangoPrice);
                mangoStock -= quantity;
                alert('Mango agregado a la cuenta');
            }
            break;

        case 2:
            if(isStock(quantity,lemonStock)){
                cart += (quantity * lemonPrice);
                lemonStock -= quantity;
                alert('Limon agregado a la cuenta');
            }
            break;
        
        case 3:
            if(isStock(quantity,tomatoStock)){
                cart += (quantity * tomatoPrice);
                tomatoStock -= quantity;
                alert('Tomate agregado a la cuenta');
            }
            break;

        default:
            alert ('Opcion no valida')
    }
    return true;
}