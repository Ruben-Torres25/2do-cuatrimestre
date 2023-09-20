var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, anio) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    return Auto;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.listar = function () {
        console.log("----- Listado De Automotores ------");
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " ").concat(auto.getModelo(), " ").concat(auto.getAnio(), " Patente: ").concat(auto.getPatente()));
        });
        console.log();
        console.log();
    };
    RegistroAutomotor.prototype.actualizar = function (auto) {
        var indiceAuto = -1;
        for (var i = 0; i < this.autos.length; i++) {
            var autoActual = this.autos[i];
            if (autoActual.getPatente() == auto.getPatente()) {
                indiceAuto = i;
            }
        }
        if (indiceAuto >= 0) {
            this.autos[indiceAuto] = auto;
        }
    };
    return RegistroAutomotor;
}());
var registro = new RegistroAutomotor();
var auto1 = new Auto("12345", "Ford", "Focus", 2022);
var auto2 = new Auto("123456", "Chevrolet", "Corsa", 2016);
registro.actualizar(auto1);
registro.darDeAlta(auto1);
registro.actualizar(auto2);
registro.darDeAlta(auto2);
registro.listar();
