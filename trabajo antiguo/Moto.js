const Producto = require('./Producto');

class Moto extends Producto {

    constructor(idProducto, nombreProducto, precioProducto, detalles, marca, cantidad, precioComprado,modelo, tipo, cilindraje, placa, papeles){
        super(idProducto, nombreProducto, precioProducto, detalles, marca, cantidad, precioComprado);
        this._modelo = modelo;
        this._tipo = tipo;
        this._cilindraje = cilindraje;
        this._placa = placa;
        this._papeles = papeles;
    }
    
    set modelo(modelo){
        this._modelo = modelo;
    }
    
    set tipo(tipo){
        this._tipo = tipo;
    }

    set cilindraje(cilindraje){
        this._cilindraje = cilindraje;
    }

    set papeles(papeles){
        this._papeles = papeles;
    }

    get modelo() {
        return this._modelo;
    }

    get tipo() {
        return this._tipo;
    }

    get cilindraje() {
        return this._cilindraje;
    }

    get placa() {
        return this._placa
    }

    get papeles() {
        return this._papeles;
    }
}



module.exports = Moto;
