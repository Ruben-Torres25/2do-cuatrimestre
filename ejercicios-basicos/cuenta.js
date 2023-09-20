var Persona = /** @class */ (function () {
    function Persona(nombre, nroCuenta) {
        this.nombre = nombre;
        this.nroCuenta = nroCuenta;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getNroCuenta = function () {
        return this.nroCuenta;
    };
    return Persona;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo) {
        this.titular = titular;
        if (saldo) {
            this.saldo = saldo;
        }
        else {
            this.saldo = 0;
        }
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrarCuenta = function () {
        console.log("Titular: ".concat(this.titular.getNombre(), " | Numero de Cuenta: ").concat(this.titular.getNroCuenta(), " | $: ").concat(this.getSaldo()));
    };
    Cuenta.prototype.ingresarMonto = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("Su deposito es de ".concat(monto, ", su saldo actual es de: $").concat(this.saldo));
        }
        else {
            console.log("El monto ingresado es incrrecto");
        }
    };
    Cuenta.prototype.retirarMonto = function (monto) {
        this.saldo -= monto;
        console.log("Su extraccion es de ".concat(monto, ", su saldo actual es de: $").concat(this.saldo));
    };
    return Cuenta;
}());
var ruben = new Persona("Ruben", 25);
var rubenCuenta = new Cuenta(ruben);
rubenCuenta.mostrarCuenta();
rubenCuenta.ingresarMonto(20);
rubenCuenta.mostrarCuenta();
rubenCuenta.retirarMonto(50);
rubenCuenta.mostrarCuenta();
console.log();
