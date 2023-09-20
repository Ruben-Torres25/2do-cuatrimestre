"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, cantidadAsientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;
    }
    Auto.prototype.imprimirDatos = function () {
        console.log("El auto ".concat(this.marca, " es modelo ").concat(this.modelo, " y tiene ").concat(this.cantidadAsientos, " cantidad de asientos y con una capacidad de carga de ").concat(this.capacidadCarga, " kg"));
    };
    return Auto;
}());
exports.Auto = Auto;
