function DecoradorPersona(target:Function): void{
    console.log(target);
}

@DecoradorPersona
class Persona {
    readonly nombre: string;
    readonly apellido: string;
    private anioNacimiento: number;

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