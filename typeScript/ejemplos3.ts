let arraySinTipo: any[] = ["River", 2, true];

let nombre: string = "Luis";
let sobrenombre: string = "Luichi";
let saludo: string = `Hola!!! mi nombre es ${nombre} y me dicen ${sobrenombre}.`;
console.log(saludo);

function saludar(): void {
    console.log("Hola cómo va!");
}

enum Clubes {
    River,
    Boca,
    Flamengo,
    Palmeiras
}

let s: number = 34;
let hinchaDe: Clubes = Clubes.River;
function mismoValor<T>(valor: T): T {
    return valor;
}

console.log(mismoValor(2));
console.log(mismoValor(true));
console.log(mismoValor([true,false,"River",4]));

let luis = {nombre: "Luis", edad: 38};
console.log(luis.edad);

let mari = {nombre: "Mari", edad: 30, fechaCumple: "31/08"};
// mari = {nombre: "Mari"};
console.log(mari.edad);

let numeros: number[] = [1,2,3,4,5,6,7,8,9];
console.log(numeros[2]);
numeros.filter(numero => numero>3);

let nombres: string[] = ["Mari", "Clari", "Luli", "Rosi"];
let [x,y,...rest]: string[] = nombres;
console.log(rest);
console.log(x);
console.log(y);

let z: undefined = undefined;
let w: null = null;

let nombrecito;
nombrecito = "Un guacho Peola";
console.log((nombrecito as string).charAt(0).toUpperCase());
console.log((<string>nombrecito).length);


