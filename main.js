// Ingreso y muestra de nombre y apellido
let nombreValidar = "Joshua"
let apellidoValidar = "Jmelnitzky"
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
const blanco = " ";

let nombreCompleto = "Bienvenido" + blanco + nombre + blanco + apellido;

if (nombre != "" && apellido != "" && nombreValidar == nombre && apellidoValidar == apellido){
    console.log(nombreCompleto);
}
else if(nombre != nombreValidar || apellido != apellidoValidar){
    alert("No se encontró el usuario ingresado");
}
else{
    alert("No se ha introducido ningún nombre/apellido");
}

// Ingreso y muestra de edad
let edad = prompt("Ingrese su edad: ");
let edadNum = parseInt(edad);
let edadNumTxt = "Edad: " + edadNum + " años";

console.log(edadNumTxt)

// Ingreso y muestra de desviación estandar de edad
let edadProm = 30 - edadNum;
let edadPromTxt = "La desviación estandar respecto a edades de otros usuarios registrados es de "  + edadProm  + " años";

console.log(edadPromTxt)

// Ingreso y muestra de calculo de salario 
let artVendidos = prompt("Ingrese la cantidad de artículos vendidos: ");
let sector = prompt("Ingrese en que sector trabaja: ");
let sueldoBase = parseFloat(35500.85);
let comision = parseFloat(5224.54);


if (sector == "administrativo" || sector == "Administrativo"){
    sueldoBase += 10000;
}
else if(sector == "RRHH" || sector == "rrhh"){
    sueldoBase += 8000;
}
else if(sector == "ventas" || sector == "Ventas"){
    sueldoBase += 7000;
}
else{
    sueldoBase += 2000;
}


let calculoSalario = sueldoBase + artVendidos * comision;

console.log("Su cargo es: " + sector);
console.log("Su sueldo es de " + "$" + calculoSalario);

// Oferta artículo

let precio = parseFloat(prompt("Introducir precio de un artículo"));

if (precio > 0 && precio < 3000){
    console.log("El producto se encuentra en oferta");
}
else if (precio > 3000 && precio < 5000){
    console.log("El producto se encuentra a precio regular");
}
else if (precio < 0){
    alert("Un precio no puede ser negativo");
}
else{
    console.log("El producto se encuentra en sobreprecio");
}





   
