import { Vehiculo } from "./vehiculo";

export class Auto implements Vehiculo {
    private marca: string;
    private modelo: number;
    private cantidadAsientos: number;
    private capacidadCarga: number;

    constructor(marca: string, modelo: number, cantidadAsientos: number, capacidadCarga: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadAsientos = cantidadAsientos;
        this.capacidadCarga = capacidadCarga;
    }

    imprimirDatos(): void {
        console.log(`El auto ${this.marca} es modelo ${this.modelo} y tiene ${this.cantidadAsientos} cantidad de asientos y con una capacidad de carga de ${this.capacidadCarga} kg`);
    }
}


