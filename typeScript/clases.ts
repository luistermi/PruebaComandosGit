function DecoradorPersona(target:Function): void{
    console.log(target);
}

@DecoradorPersona
class Persona {
    readonly nombre: string;
    readonly apellido: string;
    protected anioNacimiento: number;

    constructor(nombre: string, apellido: string, añoNacimiento: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNacimiento = añoNacimiento;
    }

    get Nombre(): string {
        return this.nombre;
    }

    // set Nombre(nombre: string) {
    //     this.nombre = nombre;
    // }

    get Apellido(): string {
        return this.apellido;
    }

    // set Apellido(apellido: string) {
    //     this.apellido = apellido;
    // }

    get AnioNacimiento(): number {
        return this.anioNacimiento;
    }

    set AnioNacimiento(anioNacimiento: number) {
        this.anioNacimiento = anioNacimiento;
    }

    public edad(anioActual: number): number {
        return anioActual - this.AnioNacimiento;
    }

    public toString(): string {
        return this.nombre + ' ' + this.apellido;
    }
    }

    class Personita extends Persona {
        private alturaCm: number;
        constructor(nombre: string, apellido: string, anioNacimiento: number, alturaCm: number) {
            super(nombre, apellido, anioNacimiento);
            this.alturaCm = alturaCm;
        }
        
        get AlturaCm(): number {
            return this.alturaCm;
        }

        set AlturaCm(alturaCm:number) {
            this.alturaCm = alturaCm;
        }
    }

    let Luichi: Persona = new Persona("Luichi", "Terminiello", 1983);
    let Mari: Personita = new Personita("Mari", "Ferrerira", 1992, 162);

    interface Operar {
        Operar(numero1: number, numero2: number): number;
    }

    class Suma implements Operar {
         Operar(numero1: number, numero2: number): number {
            return numero1 + numero2;
        }
    }

    class Resta implements Operar {
        Operar(numero1: number, numero2: number): number {
            return numero1 - numero2;
        }
    }

    let suma = new Suma();
    let resta = new Resta();
    suma.Operar(12,15);
    resta.Operar(14,16);

    class Multiplicar {
        static Operar(numero1: number, numero2: number): number {
            return numero1 * numero2;
        }
    }

    Multiplicar.Operar(13,14);

    interface Person {
        nombre: string;
        edad: number;
        direccion: {
            calle: number;
            altura: number;
            ciudad: string;
        }
        comer: ()=> number
    }

    let lucho: Person = {
        nombre: "Lucho",
        edad: 39,
        direccion: {
            calle: 15,
            altura:4382,
            ciudad: "Berazategui"
        },
        comer():number {
            return 12;
        }
    }

    JSON.parse(JSON.stringify(lucho));