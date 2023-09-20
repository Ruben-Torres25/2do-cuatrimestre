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
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Animal.prototype.getRaza = function () {
        return this.raza;
    };
    Animal.prototype.Raza = function (raza) {
        this.raza = raza;
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre, edad, raza, tamaño) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tamaño = tamaño;
        return _this;
    }
    Perro.prototype.emitirSonido = function () {
        console.log("".concat(this.nombre, ": Guau Guau"));
    };
    Perro.prototype.moverAnimal = function () {
        console.log("".concat(this.nombre, ": se movio de lugar"));
    };
    Perro.prototype.buscarObjeto = function (objeto) {
        console.log("".concat(this.nombre, " encontro ").concat(objeto));
    };
    Perro.prototype.getTamaño = function () {
        return this.tamaño;
    };
    Perro.prototype.setTamaño = function (tamaño) {
        this.tamaño = tamaño;
    };
    return Perro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombre, edad, raza, pelaje) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.pelaje = pelaje;
        return _this;
    }
    Gato.prototype.emitirSonido = function () {
        console.log("".concat(this.nombre, " MIAU MIAU"));
    };
    Gato.prototype.moverAnimal = function () {
        console.log("".concat(this.nombre, " se movio de lugar"));
    };
    Gato.prototype.jugarConJuegete = function (juguete) {
        console.log("".concat(this.nombre, " esta jugando con ").concat(juguete));
    };
    Gato.prototype.getPelaje = function () {
        return this.pelaje;
    };
    Gato.prototype.setpelaje = function (pelaje) {
        this.pelaje = pelaje;
    };
    return Gato;
}(Animal));
var Pajaro = /** @class */ (function (_super) {
    __extends(Pajaro, _super);
    function Pajaro(nombre, edad, raza, tipoDePico) {
        var _this = _super.call(this, nombre, edad, raza) || this;
        _this.tipoDePico = tipoDePico;
        return _this;
    }
    Pajaro.prototype.emitirSonido = function () {
        console.log("".concat(this.nombre, " dice: PIO PIOOOOO"));
    };
    Pajaro.prototype.moverAnimal = function () {
        console.log("".concat(this.nombre, " se movio"));
    };
    Pajaro.prototype.getTipoDePico = function () {
        return this.tipoDePico;
    };
    Pajaro.prototype.setTipoDePico = function (pico) {
        this.tipoDePico = pico;
    };
    Pajaro.prototype.volar = function () {
        console.log("".concat(this.nombre, " volo a otra rama"));
    };
    return Pajaro;
}(Animal));
var perrito = new Perro("Lola", 6, "Boxer", "mediano");
var gatito = new Gato("Peluza", 3, "siamez", "atigrado");
var pajarito = new Pajaro("Piolin", 2, "canario", "Pico sin filo");
console.log("------------------------------------------");
perrito.buscarObjeto("palo");
perrito.emitirSonido();
perrito.moverAnimal();
console.log("------------------------------------------");
gatito.emitirSonido();
gatito.moverAnimal();
gatito.jugarConJuegete("cascabel");
console.log("------------------------------------------");
pajarito.emitirSonido();
pajarito.moverAnimal();
pajarito.volar();
console.log("------------------------------------------");
console.log("////////////////////");
console.log(perrito);
console.log("////////////////////");
console.log(gatito);
console.log("////////////////////");
console.log(pajarito);
console.log("////////////////////");
