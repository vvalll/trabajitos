const Factura = require('./Factura');
const Pedido = require('./Pedido');

class Devolucion{
    constructor(idDevolucion, comentario, factura, pedido){
        this._idDevolucion = idDevolucion;
        this._fechaDevolucion = new Date ;
        this._comentario = comentario;
        this._factura = factura;
        this._pedido = pedido;
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

    get pedido(){
        return this._pedido;
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
    
    set pedido(pedido){
        this._pedido = pedido;
    }
}

module.exports = Devolucion; 