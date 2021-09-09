// Declaraciones de variables
let number;
let resultado;
let products;
let nombre;
let mayor = 0;
let menor = 0; 
let ingresoNumber;
const precio = 1500;

//Menú de opciones
alert("Menú de opciones: \n 1) Consultar menú de opciones \n 2) Cargar ventas de productos \n 3) Calcular tablas \n 4) Mayor y menor número",);

let opcionElegida = parseInt(prompt("Ingrese el número de la operación que desea realizar, para finalizar use el 0: "));

while(opcionElegida <= 4 && opcionElegida > 0 && opcionElegida != "0"){
    switch(opcionElegida){

        // Opcion 1) Mostrar menú de opciones
        case 1:
            console.log("Menú de opciones: ");
            console.log("1) Cargar ventas de productos");
            console.log("2) Calcular tablas");
            console.log("4) Mayor y menor número")
            break

        // Opcion 2) Cargar nombre y cantidad de productos. Se muestra por ultimo el total.
        case 2:
            nombre = " ";
            while(true){
                nombre = prompt("Ingrese el nombre del producto vendido, para terminar escriba cualquier número: ");
                if (isNaN(parseInt(nombre)) == false){
                    break;
                }
                products = parseInt(prompt("Ingrese cantidad de productos vendidos: "));
                console.log("Se han vendido " + products + " " + nombre + " dando un total de " + "$" + products*precio);
            }
            break

        // Opcion 3) Calcular tabla de un número ingresado
        case 3:
            number = parseInt(prompt("Ingresar un número: "));
            for (let i = 1; i <=10; i++) {
                resultado = number * i;
                console.log(number + " * " + i + " = " + resultado);
            }
            break
        
        // Opcion 4) Mostrar mayor y menor número de los ingresados por el usuario
        case 4:
            number = parseInt(prompt("Ingrese cantidad de números a comprobar: "));
            for (let i=1; i<= number; i++){
                ingresoNumber = parseInt(prompt("Ingrese el " + i + " número: "));
                if (ingresoNumber > mayor){
                    mayor = ingresoNumber;
                }
                else if (ingresoNumber < menor){
                    menor = ingresoNumber;
                }         
            }
            console.log("El mayor número de los ingresados es el " + mayor);
            console.log("El menor número de los ingresados es el " + menor);
            break
        }

    opcionElegida = parseInt(prompt("Ingrese el número de la operación que desea realizar, para finalizar use el 0: "));
}


alert("Gracias por usar el sistema :D")


