//1:

class Publicacion{
    constructor(titulo, precio){
        this._titulo = titulo;
        this._precio = precio; 
    }
    
    get titulo(){
        return this._titulo;
    }
    set titulo(titulo){
        return this._titulo = titulo;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }

    pagoEfectivo(_precio){
        return `Pago con: 100000, El cambio: `+ (100000 - this._precio);
    }



}

class Libro extends Publicacion{
    constructor(titulo, precio,numPaginas){
        super(titulo,precio);
        this._numPaginas = numPaginas;
    }

    get numPaginas(){
        return this._numPaginas;
    }
    set numPaginas(numPaginas){
        return this._numPaginas = numPaginas;
    }

}

class DiscoCompacto extends Publicacion{
    constructor(titulo, precio, tiempoRepro){
        super(titulo,precio);
        this._tiempoRepro = tiempoRepro; 
    }

    get tiempoRepro(){
        return this._tiempoRepro;
    }
    set tiempoRepro(tiempoRepro){
        return this._tiempoRepro = tiempoRepro;
    }
}

let libro1 = new Libro(`Maze Runner`, 50000, 420);
console.log(libro1);
console.log(`numero de paginas: `+libro1.numPaginas) 
console.log(libro1.pagoEfectivo())

let disco1 = new DiscoCompacto(`Alicia en el pais de las maravillas`, 10000, 85);
console.log(disco1);
disco1._precio = 12000;
console.log(`Nuevo precio: `+disco1._precio)
console.log(disco1.pagoEfectivo())



//--------------------------------------------------------------------------------------------------//


//2:

class Auto{
    constructor(numeroSerieMotor, marca, año, precio){
        this._numeroSerieMotor = numeroSerieMotor; 
        this._marca = marca;
        this._año = año; 
        this._precio = precio; 
    }

    get numeroSerieMotor(){
        return this._numeroSerieMotor;
    }
    get marca(){
        return this._marca;
    }
    get año(){
        return this._año;
    }
    get precio(){
        return this._precio;
    }

    set numeroSerieMotor(numeroSerieMotor){
        this._numeroSerieMotor = numeroSerieMotor;
    }
    set marca(marca){
        this._marca = marca;
    }
    set año(año){
        this._año = año;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(_numeroSerieMotor,_marca,_año, _precio, _cantidadPasajeros, _capacidadCarga){
        return `El numero de serie del motor es: ${this._numeroSerieMotor} \n La marca del vehiculo es: ${this._marca} \n El año del vehiculo es: ${this._año}  \n El precio del vehiculo es: ${this._precio}`
    }
}

class AutoCompacto extends Auto{
    constructor(numeroSerieMotor, marca, año, precio, cantidadPasajeros){
        super(numeroSerieMotor, marca, año, precio);
        this._cantidadPasajeros = cantidadPasajeros; 
    }
    get cantidadPasajeros(){
        return this._cantidadPasajeros;
    }
    
    set cantidadPasajeros(cantidadPasajeros){
        return this.cantidadPasajeros = cantidadPasajeros;
    }

    toString(_cantidadPasajeros){
        return `El numero de serie del motor es: ${this._numeroSerieMotor} \n La marca del vehiculo es: ${this._marca} \n El año del vehiculo es: ${this._año}  \n El precio del vehiculo es: ${this._precio} \n La cantidad de pasajeros son: ${this._cantidadPasajeros}`
    }
}

let compacto1 = new AutoCompacto(123, `Chevrolet`, 2020, 9000000, 4);
console.log(compacto1)

console.log(compacto1.toString())


class AutoLujo extends Auto{
    constructor(numeroSerieMotor, marca, año, precio, cantidadPasajeros){
        super(numeroSerieMotor, marca, año, precio);
        this._cantidadPasajeros = cantidadPasajeros;
    }
    get cantidadPasajeros(){
        return this._cantidadPasajeros;
    }
    
    set cantidadPasajeros(cantidadPasajeros){
        return this._cantidadPasajeros = cantidadPasajeros;
    }

    toString(_cantidadPasajeros){
        return `El numero de serie del motor es: ${this._numeroSerieMotor} \n La marca del vehiculo es: ${this._marca} \n El año del vehiculo es: ${this._año}  \n El precio del vehiculo es: ${this._precio} \n La cantidad de pasajeros son: ${this._cantidadPasajeros}`
    }
}

let lujo1 = new AutoLujo(234, "Lamborghini", 2022, 30000000, 4);
console.log(lujo1);

console.log(lujo1.toString())


class Camionetas extends Auto{
    constructor(numeroSerieMotor, marca, año, precio, capacidadCarga){
        super(numeroSerieMotor,marca,año,precio);
        this._capacidadCarga = capacidadCarga;
    }
    get capacidadCarga(){
        return this._capacidadCarga;
    }
    
    set capacidadCarga(capacidadCarga){
        return this._capacidadCarga = capacidadCarga;
    }

    toString(_capacidadCarga){
        return `El numero de serie del motor es: ${this._numeroSerieMotor} \n La marca del vehiculo es: ${this._marca} \n El año del vehiculo es: ${this._año}  \n El precio del vehiculo es: ${this._precio} \n La capacidad de carga es: ${this._capacidadCarga}`
    }
}

let camioneta1 = new Camionetas(567, "chevrolet", 2021, 12000000, 100);
console.log(camioneta1);

console.log(camioneta1.toString())


class Vagonetas extends Auto{
    constructor(numeroSerieMotor,marca,año,precio,cantidadPasajeros){
        super(numeroSerieMotor,marca,año,precio)
        this._cantidadPasajeros = cantidadPasajeros;
    }
    get cantidadPasajeros(){
        return this._cantidadPasajeros;
    }
    
    set cantidadPasajeros(cantidadPasajeros){
        return this._cantidadPasajeros = cantidadPasajeros;
    }

    toString(_cantidadPasajeros){
        return `El numero de serie del motor es: ${this._numeroSerieMotor} \n La marca del vehiculo es: ${this._marca} \n El año del vehiculo es: ${this._año}  \n El precio del vehiculo es: ${this._precio} \n La cantidad de pasajeros son: ${this._cantidadPasajeros}`
    }
}

let vagoneta1 = new Vagonetas(987, "Volvo", 2019, 18000000, 9);
console.log(vagoneta1)


console.log(vagoneta1.toString())