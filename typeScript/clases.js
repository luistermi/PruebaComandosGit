var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradorPersona(target) {
    console.log(target);
}
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, añoNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNacimiento = añoNacimiento;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        // set Nombre(nombre: string) {
        //     this.nombre = nombre;
        // }
        get: function () {
            return this.apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "AnioNacimiento", {
        // set Apellido(apellido: string) {
        //     this.apellido = apellido;
        // }
        get: function () {
            return this.anioNacimiento;
        },
        set: function (anioNacimiento) {
            this.anioNacimiento = anioNacimiento;
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.edad = function (anioActual) {
        return anioActual - this.AnioNacimiento;
    };
    Persona.prototype.toString = function () {
        return this.nombre + ' ' + this.apellido;
    };
    Persona = __decorate([
        DecoradorPersona
    ], Persona);
    return Persona;
}());
var Personita = /** @class */ (function (_super) {
    __extends(Personita, _super);
    function Personita(nombre, apellido, anioNacimiento, alturaCm) {
        var _this = _super.call(this, nombre, apellido, anioNacimiento) || this;
        _this.alturaCm = alturaCm;
        return _this;
    }
    Object.defineProperty(Personita.prototype, "AlturaCm", {
        get: function () {
            return this.alturaCm;
        },
        set: function (alturaCm) {
            this.alturaCm = alturaCm;
        },
        enumerable: false,
        configurable: true
    });
    return Personita;
}(Persona));
var Luichi = new Persona("Luichi", "Terminiello", 1983);
var Mari = new Personita("Mari", "Ferrerira", 1992, 162);
var Suma = /** @class */ (function () {
    function Suma() {
    }
    Suma.prototype.Operar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    return Suma;
}());
var Resta = /** @class */ (function () {
    function Resta() {
    }
    Resta.prototype.Operar = function (numero1, numero2) {
        return numero1 - numero2;
    };
    return Resta;
}());
var suma = new Suma();
var resta = new Resta();
suma.Operar(12, 15);
resta.Operar(14, 16);
var Multiplicar = /** @class */ (function () {
    function Multiplicar() {
    }
    Multiplicar.Operar = function (numero1, numero2) {
        return numero1 * numero2;
    };
    return Multiplicar;
}());
Multiplicar.Operar(13, 14);
var lucho = {
    nombre: "Lucho",
    edad: 39,
    direccion: {
        calle: 15,
        altura: 4382,
        ciudad: "Berazategui"
    },
    comer: function () {
        return 12;
    }
};
JSON.parse(JSON.stringify(lucho));
