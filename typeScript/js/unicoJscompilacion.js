"use strict";
var a;
var b;
var c = 101;
c = 2;
var equipos = ["River", "Boca", 100];
equipos = [1, 2, 3];
function promedio(number1, number2) {
    let divisor = 2;
    return (number1 + number2) / 2;
}
let arraySinTipo = ["River", 2, true];
let nombre = "Luis";
let sobrenombre = "Luichi";
let saludo = `Hola!!! mi nombre es ${nombre} y me dicen ${sobrenombre}.`;
console.log(saludo);
function saludar() {
    console.log("Hola cómo va!");
}
var Clubes;
(function (Clubes) {
    Clubes[Clubes["River"] = 0] = "River";
    Clubes[Clubes["Boca"] = 1] = "Boca";
    Clubes[Clubes["Flamengo"] = 2] = "Flamengo";
    Clubes[Clubes["Palmeiras"] = 3] = "Palmeiras";
})(Clubes || (Clubes = {}));
let s = 34;
let hinchaDe = Clubes.River;
function mismoValor(valor) {
    return valor;
}
console.log(mismoValor(2));
console.log(mismoValor(true));
console.log(mismoValor([true, false, "River", 4]));
let luis = { nombre: "Luis", edad: 38 };
console.log(luis.edad);
let mari = { nombre: "Mari", edad: 30, fechaCumple: "31/08" };
// mari = {nombre: "Mari"};
console.log(mari.edad);
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros[2]);
numeros.filter(numero => numero > 3);
let nombres = ["Mari", "Clari", "Luli", "Rosi"];
let [x, y, ...rest] = nombres;
console.log(rest);
console.log(x);
console.log(y);
let z = undefined;
let w = null;
let nombrecito;
nombrecito = "Un guacho Peola";
console.log(nombrecito.charAt(0).toUpperCase());
console.log(nombrecito.length);
