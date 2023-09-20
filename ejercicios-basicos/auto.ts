class Auto {
    private patente: string;
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(patente: string, marca: string, modelo: string, anio: number) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;

    }
    getPatente(): string {
        return this.patente;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getAnio(): number {
        return this.anio;
    }


}
class RegistroAutomotor {
    private autos: Auto[];

    constructor() {
        this.autos = [];
    }
    darDeAlta(auto: Auto) {
        this.autos.push(auto);
    }
    listar(): void {
        console.log("----- Listado De Automotores ------");

        this.autos.forEach((auto: Auto, indice: number) => {
            console.log(`${indice + 1} - ${auto.getMarca()} ${auto.getModelo()} ${auto.getAnio()} Patente: ${auto.getPatente()}`);

        });
        console.log();
        console.log();
    }
    actualizar(auto: Auto): void {
        let indiceAuto = -1;
        for (let i = 0; i < this.autos.length; i++) {
            const autoActual = this.autos[i];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = i;
            }
        }

        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
        }
    }

}
let registro = new RegistroAutomotor();
let auto1 = new Auto("12345", "Ford", "Focus", 2022);
let auto2 = new Auto("123456", "Chevrolet", "Corsa", 2016);

registro.actualizar(auto1);
registro.darDeAlta(auto1);
registro.actualizar(auto2);
registro.darDeAlta(auto2);
registro.listar();