"use strict";
exports.__esModule = true;
exports.Camioneta = void 0;
var Camioneta = /** @class */ (function () {
    function Camioneta(marca, modelo, cantidadAsientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;
    }
    Camioneta.prototype.imprimirDatos = function () {
        console.log("La camioneta ".concat(this.marca, " es modelo ").concat(this.modelo, " y tiene ").concat(this.cantidadAsientos, " cantidad de asientos y con una capacidad de carga de ").concat(this.capacidadCarga, " kg"));
    };
    return Camioneta;
}());
exports.Camioneta = Camioneta;
