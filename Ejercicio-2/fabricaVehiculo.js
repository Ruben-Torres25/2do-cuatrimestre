"use strict";
exports.__esModule = true;
exports.FabricaPrincipal = void 0;
var fabricaAutomotiz_1 = require("./fabricaAutomotiz");
var fabricaAutomotiz_2 = require("./fabricaAutomotiz");
var FabricaPrincipal = /** @class */ (function () {
    function FabricaPrincipal() {
    }
    FabricaPrincipal.prototype.crearVehiculo = function (marca, modelo, cantidadAsientos, capacidadCarga) {
        var vehiculo;
        if (cantidadAsientos <= 5) {
            vehiculo = new fabricaAutomotiz_1.FabricaAuto().crearVehiculo(marca, modelo, cantidadAsientos, capacidadCarga);
            return vehiculo;
        }
        else if (cantidadAsientos > 5) {
            vehiculo = new fabricaAutomotiz_2.FabricaCamioneta().crearVehiculo(marca, modelo, cantidadAsientos, capacidadCarga);
            return vehiculo;
        }
    };
    return FabricaPrincipal;
}());
exports.FabricaPrincipal = FabricaPrincipal;
