"use strict";
exports.__esModule = true;
var fabricaVehiculo_1 = require("./fabricaVehiculo");
var fabricaPrincipal = new fabricaVehiculo_1.FabricaPrincipal();
var vehiculo1 = fabricaPrincipal.crearVehiculo("Ford", 2010, 5, 1000);
console.log("--------");
var vehiculo2 = fabricaPrincipal.crearVehiculo("Chevrolet", 2023, 8, 2300);
console.log("--------");
vehiculo1.imprimirDatos();
vehiculo2.imprimirDatos();
