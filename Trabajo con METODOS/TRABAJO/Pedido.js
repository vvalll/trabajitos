const Usuario = require('./Usuario');
const Devolucion = require('./Devolucion');
const MetodoPago = require('./MetodoPago');

class Pedido {
    constructor(usuario, idPedido, fechaCreacion, estadoPedido, devolucion, metodoPago){
        this._usuario = usuario;
        this._idPedido = idPedido;
        this._fechaCreacion = fechaCreacion;
        this._estadoPedido = estadoPedido;
        this._devolucion = devolucion;
        this._metodoPago = metodoPago;
    }

    get usuario(){
        return this._usuario;
    }

    get idPedido(){
        return this._idPedido;
    }

    get fechaCreacion(){
        return this._fechaCreacion;
    }

    get estadoPedido(){
        return this._estadoPedido;
    }

    get devolucion(){
        return this._devolucion;
    }

    get metodoPago(){
        return this._metodoPago;
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    set fechaCreacion(fechaCreacion){
        this._fechaCreacion = fechaCreacion;
    }

    set estadoPedido(estadoPedido){
        this._estadoPedido = estadoPedido;
    }

    set devolucion(devolucion){
        this._devolucion = devolucion;
    }

    set metodoPago(metodoPago){
        this._metodoPago = metodoPago;
    }
    //Metodos
    crearPedido(){

    }
    eliminarPedido(){

    }
    modificarPedido(){

    }
    visualizarPedido(){
        
    }
}

module.exports = Pedido; 