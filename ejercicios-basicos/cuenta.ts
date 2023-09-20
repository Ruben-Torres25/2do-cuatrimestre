class Persona {
    private nombre: string;
    private nroCuenta: number;

    constructor(nombre: string, nroCuenta: number) {
        this.nombre = nombre;
        this.nroCuenta = nroCuenta;
    }

    getNombre(): string {
        return this.nombre;
    }

    getNroCuenta(): number {
        return this.nroCuenta;
    }
}

class Cuenta {
    private titular: Persona;
    private saldo: number;

    constructor(titular: Persona, saldo?: number) {
        this.titular = titular;
        if (saldo) {
            this.saldo = saldo;
        } else { this.saldo = 0; }

    }

    public getTitular(): Persona {
        return this.titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public mostrarCuenta(): void {
        console.log(`Titular: ${this.titular.getNombre()} | Numero de Cuenta: ${this.titular.getNroCuenta()} | $: ${this.getSaldo()}`)
    }

    public ingresarMonto(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Su deposito es de ${monto}, su saldo actual es de: $${this.saldo}`);
        } else {
            console.log("El monto ingresado es incrrecto")
        }
    }

    public retirarMonto(monto: number): void {
        this.saldo -= monto;
        console.log(`Su extraccion es de ${monto}, su saldo actual es de: $${this.saldo}`);
    }
}

let ruben = new Persona("Ruben", 25);
let rubenCuenta = new Cuenta(ruben);

rubenCuenta.mostrarCuenta();
rubenCuenta.ingresarMonto(20);
rubenCuenta.mostrarCuenta();
rubenCuenta.retirarMonto(50);
rubenCuenta.mostrarCuenta();
console.log();