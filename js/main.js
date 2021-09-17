alert('Bienvenido a HardBuy - Tienda de hardware')

do{
    let option = parseInt(prompt(menu));
    let choice = products(option);
    alert(choice);
    if(option === 5) break;
    let qty = parseInt(prompt(SelectedQty))

    addToCart(option, qty);

    resp = prompt('¿Desea agregar mas productos a la cuenta? SI/NO');

    console.log(resp)

}while(resp === "SI");

if(cart > 0){
    alert(`Su compra tiene un total de $${cart}`);
}

alert('Gracias, vuelva prontos')