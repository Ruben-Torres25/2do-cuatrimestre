import { FabricaPrincipal } from "./fabricaVehiculo";

let fabricaPrincipal = new FabricaPrincipal();


let vehiculo1 = fabricaPrincipal.crearVehiculo("Ford", 2010, 5, 1000);

let vehiculo2 = fabricaPrincipal.crearVehiculo("Chevrolet", 2023, 8, 2300);


vehiculo1.imprimirDatos();
console.log("----------------------------------------------------------------------");
vehiculo2.imprimirDatos();