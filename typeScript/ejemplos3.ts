let arraySinTipo: any[] = ["River", 2, true];

let nombre: string = "Luis";
let sobrenombre: string = "Luichi";
let saludo: string = `Hola!!! mi nombre es S{nombre} y me dicen S{sobrenombre}.`;
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

let hinchaDe: Clubes = Clubes.River;
function mismoValor<T>(valor: T): T {
    return valor;
}

console.log(mismoValor(2));
console.log(mismoValor(true));
console.log(mismoValor([true,false,"River",4]));

let luis = {nombre: "Luis", edad: 38};
console.log(luis.edad);



