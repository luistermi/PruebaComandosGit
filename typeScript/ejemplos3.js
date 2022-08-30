var arraySinTipo = ["River", 2, true];
var nombre = "Luis";
var sobrenombre = "Luichi";
var saludo = "Hola!!! mi nombre es ".concat(nombre, " y me dicen ").concat(sobrenombre, ".");
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
var s = 34;
var hinchaDe = Clubes.River;
function mismoValor(valor) {
    return valor;
}
console.log(mismoValor(2));
console.log(mismoValor(true));
console.log(mismoValor([true, false, "River", 4]));
var luis = { nombre: "Luis", edad: 38 };
console.log(luis.edad);
var mari = { nombre: "Mari", edad: 30, fechaCumple: "31/08" };
// mari = {nombre: "Mari"};
console.log(mari.edad);
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros[2]);
numeros.filter(function (numero) { return numero > 3; });
var nombres = ["Mari", "Clari", "Luli", "Rosi"];
var x = nombres[0], y = nombres[1], rest = nombres.slice(2);
console.log(rest);
console.log(x);
console.log(y);
var z = undefined;
var w = null;
var nombrecito;
nombrecito = "Un guacho Peola";
console.log(nombrecito.charAt(0).toUpperCase());
console.log(nombrecito.length);
