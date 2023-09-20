"use strict";
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
exports.__esModule = true;
exports.FabricaCamioneta = exports.FabricaAuto = exports.Fabrica = void 0;
var auto_1 = require("./auto");
var camioneta_1 = require("./camioneta");
var Fabrica = /** @class */ (function () {
    function Fabrica() {
    }
    return Fabrica;
}());
exports.Fabrica = Fabrica;
var FabricaAuto = /** @class */ (function (_super) {
    __extends(FabricaAuto, _super);
    function FabricaAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricaAuto.prototype.crearVehiculo = function (marca, modelo, cantidadAsientos, capacidadCarga) {
        return new auto_1.Auto(marca, modelo, cantidadAsientos, capacidadCarga);
    };
    return FabricaAuto;
}(Fabrica));
exports.FabricaAuto = FabricaAuto;
var FabricaCamioneta = /** @class */ (function (_super) {
    __extends(FabricaCamioneta, _super);
    function FabricaCamioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricaCamioneta.prototype.crearVehiculo = function (marca, modelo, cantidadAsientos, capacidadCarga) {
        return new camioneta_1.Camioneta(marca, modelo, cantidadAsientos, capacidadCarga);
    };
    return FabricaCamioneta;
}(Fabrica));
exports.FabricaCamioneta = FabricaCamioneta;
