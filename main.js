// Ingreso y muestra de nombre y apellido
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
const blanco = " ";

let nombreCompleto = "Bienvenido" + blanco + nombre + blanco + apellido;

console.log(nombreCompleto);

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
let sueldoBase = parseFloat(35500.85);
let comision = parseFloat(5224.54);

let calculoSalario = sueldoBase + artVendidos * comision;

console.log("Su sueldo es de " + "$" + calculoSalario);