export abstract class Animal {
    protected nombre: string;
    protected edad: number;
    protected raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }

    public abstract emitirSonido(): void;
    public abstract moverAnimal(): void;

    private getNombre(): string {
        return this.nombre;
    }

    private setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    private getEdad(): number {
        return this.edad;
    }

    private setEdad(edad: number): void {
        this.edad = edad;
    }

    private getRaza(): string {
        return this.raza
    }

    private Raza(raza: string) {
        this.raza = raza;
    }
}

class Perro extends Animal {
    private tamaño: string;

    constructor(nombre: string, edad: number, raza: string, tamaño: string) {
        super(nombre, edad, raza);
        this.tamaño = tamaño;
    }

    public emitirSonido(): void {
        console.log(`${this.nombre}: Guau Guau`)
    }

    public moverAnimal(): void {
        console.log(`${this.nombre}: se movio de lugar`)
    }

    public buscarObjeto(objeto: string): void {
        console.log(`${this.nombre} encontro ${objeto}`)
    }

    private getTamaño(): string {
        return this.tamaño;
    }

    private setTamaño(tamaño: string) {
        this.tamaño = tamaño;
    }
}

class Gato extends Animal {
    private pelaje: string;

    constructor(nombre: string, edad: number, raza: string, pelaje: string) {
        super(nombre, edad, raza);
        this.pelaje = pelaje;
    }

    public emitirSonido(): void {
        console.log(`${this.nombre} MIAU MIAU`);
    }

    public moverAnimal(): void {
        console.log(`${this.nombre} se movio de lugar`);
    }

    public jugarConJuegete(juguete: string): void {
        console.log(`${this.nombre} esta jugando con ${juguete}`)
    }

    private getPelaje(): string {
        return this.pelaje;
    }

    private setpelaje(pelaje: string) {
        this.pelaje = pelaje;
    }

}

class Pajaro extends Animal {
    private tipoDePico: string;

    constructor(nombre: string, edad: number, raza: string, tipoDePico: string) {
        super(nombre, edad, raza);
        this.tipoDePico = tipoDePico;
    }

    public emitirSonido(): void {
        console.log(`${this.nombre} dice: PIO PIOOOOO`);
    }

    public moverAnimal(): void {
        console.log(`${this.nombre} se movio`);
    }

    private getTipoDePico(): string {
        return this.tipoDePico;
    }

    private setTipoDePico(pico: string): void {
        this.tipoDePico = pico;
    }

    public volar(): void {
        console.log(`${this.nombre} volo a otra rama`);
    }
}

let perrito = new Perro("Lola", 6, "Boxer", "mediano");
let gatito = new Gato("Peluza", 3, "siamez", "atigrado");
let pajarito = new Pajaro("Piolin", 2, "canario", "Pico sin filo");
console.log("------------------------------------------");
perrito.buscarObjeto("palo");
perrito.emitirSonido();
perrito.moverAnimal();

console.log("------------------------------------------");

gatito.emitirSonido();
gatito.moverAnimal();
gatito.jugarConJuegete("cascabel");

console.log("------------------------------------------");

pajarito.emitirSonido();
pajarito.moverAnimal();
pajarito.volar();

console.log("------------------------------------------");
console.log("////////////////////");
console.log(perrito);
console.log("////////////////////");
console.log(gatito);
console.log("////////////////////");
console.log(pajarito);
console.log("////////////////////");