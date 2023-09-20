import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Camioneta } from "./camioneta";

export abstract class Fabrica {
    abstract crearVehiculo(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo;

}

export class FabricaAuto extends Fabrica {
    crearVehiculo(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo {

        return new Auto(marca, modelo, cantidadAsientos, capacidadCarga);
    }
}

export class FabricaCamioneta extends Fabrica {
    crearVehiculo(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number): Vehiculo {

        return new Camioneta(marca, modelo, cantidadAsientos, capacidadCarga);
    }
}

