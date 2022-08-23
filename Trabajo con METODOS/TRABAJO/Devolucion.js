const Factura = require('./Factura');

class Devolucion{
    constructor(idDevolucion, fechaDevolucion, comentario, factura){
        this._idDevolucion = idDevolucion;
        this._fechaDevolucion = fechaDevolucion;
        this._comentario = comentario;
        this._factura = factura;
    }

    get idDevolucion(){
        return this._idDevolucion;
    }

    get fechaDevolucion(){
        return this._fechaDevolucion;
    }

    get comentario(){
        return this._comentario;
    }

    get factura(){
        return this._factura;
    }

    set fechaDevolucion(fechaDevolucion){
        this._fechaDevolucion = fechaDevolucion;
    }

    set comentario(comentario){
        this._comentario = comentario;
    }

    set factura(factura){
        this._factura = factura;
    }
    //Metodos
    devolucionDinero(){

    }

    validacionFactura(){

    }
}

module.exports = Devolucion; 