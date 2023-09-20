var Serie = /** @class */ (function () {
    function Serie(titulo, anioDeEstreno, episodiosPorTemporada, temporadas) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;
    }
    Serie.prototype.getTitulo = function () {
        return this.titulo;
    };
    Serie.prototype.getAnioDeEstreno = function () {
        return this.anioDeEstreno;
    };
    Serie.prototype.getEpisodiosPorTemporada = function () {
        return this.episodiosPorTemporada;
    };
    Serie.prototype.getTemporadas = function () {
        return this.temporadas;
    };
    Serie.prototype.getEpisodiosVistos = function () {
        return this.episodiosVistos;
    };
    Serie.prototype.getFinalizadaCancelada = function () {
        return this.finalizadaCancelada;
    };
    //metodos 
    Serie.prototype.VerEpisodios = function (temporada, episodio) {
        console.log("Estas viendo la serie: ".concat(this.getTitulo(), ", temporada: ").concat(temporada, ", episodio ").concat(episodio));
        this.episodiosVistos++;
        console.log("Los episodios que ya viste son ".concat(this.episodiosVistos));
    };
    Serie.prototype.episodiosPorVer = function () {
        var episodiosPorVer = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;
        console.log("Los episodios que quedan son: ".concat(episodiosPorVer));
    };
    Serie.prototype.serieVista = function () {
        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log("Terminaste la serie: ".concat(this.titulo));
        }
        else {
            console.log("Quieres seguir viendo la serie?");
        }
    };
    Serie.prototype.toString = function (serie) {
        console.log(serie);
        console.log("Estas viendo ".concat(serie.getTitulo(), " que fue estrenada en el anio ").concat(serie.getAnioDeEstreno(), " ,con ").concat(serie.getTemporadas(), " temporadas y con ").concat(serie.getEpisodiosPorTemporada(), " capitulos"));
    };
    return Serie;
}());
var strangerThings = new Serie("Stranger Things", 2018, 10, 5);
var onePiece = new Serie("One Piece", 1999, 1075, 1);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("-------Stranger Things-------");
strangerThings.VerEpisodios(1, 12);
strangerThings.episodiosPorVer();
strangerThings.serieVista();
strangerThings.toString(strangerThings);
console.log("-------One Piece-------");
onePiece.VerEpisodios(1, 725);
onePiece.episodiosPorVer();
onePiece.serieVista();
onePiece.toString(onePiece);
