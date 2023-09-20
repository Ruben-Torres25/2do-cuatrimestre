import { FabricaAuto } from "./fabricaAutomotiz";
import { FabricaCamioneta } from "./fabricaAutomotiz";
import { Vehiculo } from "./vehiculo";

export class FabricaPrincipal {
    constructor() {

    }

    crearVehiculo(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo {
        let vehiculo: Vehiculo;
        if (cantidadAsientos <= 5) {
            vehiculo = new FabricaAuto().crearVehiculo(marca, modelo, cantidadAsientos, capacidadCarga);

            return vehiculo;
        } else if (cantidadAsientos > 5) {
            vehiculo = new FabricaCamioneta().crearVehiculo(marca, modelo, cantidadAsientos, capacidadCarga);

            return vehiculo;
        }
    }
}