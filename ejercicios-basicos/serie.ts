class Serie {
    private titulo: string;
    private anioDeEstreno: number;
    private episodiosPorTemporada: number;
    private temporadas: number;
    private episodiosVistos: number;
    private finalizadaCancelada: boolean;

    constructor(titulo: string, anioDeEstreno: number, episodiosPorTemporada: number, temporadas: number) {
        this.titulo = titulo;
        this.anioDeEstreno = anioDeEstreno;
        this.episodiosPorTemporada = episodiosPorTemporada;
        this.temporadas = temporadas;
        this.episodiosVistos = 0;
        this.finalizadaCancelada = false;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAnioDeEstreno(): number {
        return this.anioDeEstreno;
    }

    public getEpisodiosPorTemporada(): number {
        return this.episodiosPorTemporada;
    }

    public getTemporadas(): number {
        return this.temporadas;
    }

    public getEpisodiosVistos(): number {
        return this.episodiosVistos;
    }

    public getFinalizadaCancelada(): boolean {
        return this.finalizadaCancelada;
    }

    //metodos 

    public VerEpisodios(temporada: number, episodio: number) {
        console.log(`Estas viendo la serie: ${this.getTitulo()}, temporada: ${temporada}, episodio ${episodio}`);
        this.episodiosVistos++;
        console.log(`Los episodios que ya viste son ${this.episodiosVistos}`)
    }

    public episodiosPorVer() {
        let episodiosPorVer: number = this.episodiosPorTemporada * this.temporadas - this.episodiosVistos;
        console.log(`Los episodios que quedan son: ${episodiosPorVer}`);
    }

    public serieVista() {
        if (this.episodiosPorTemporada * this.temporadas - this.episodiosVistos == 0) {
            console.log(`Terminaste la serie: ${this.titulo}`);
        } else {
            console.log("Quieres seguir viendo la serie?")
        }
    }

    public toString(serie: Serie) {
        console.log(serie);
        console.log(`Estas viendo ${serie.getTitulo()} que fue estrenada en el anio ${serie.getAnioDeEstreno()} ,con ${serie.getTemporadas()} temporadas y con ${serie.getEpisodiosPorTemporada()} capitulos`);
    }

}

let strangerThings = new Serie("Stranger Things", 2018, 10, 5);
let onePiece = new Serie("One Piece", 1999, 1075, 1);

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
