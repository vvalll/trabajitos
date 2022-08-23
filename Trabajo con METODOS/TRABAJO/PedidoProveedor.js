const Producto = require('./Producto.js');

class PedidoProveedor {
    constructor(idPedidoP, fechaCreacion, estadoPedido, precioCompra, producto){
        this._idPedidoP = idPedidoP;
        this._fechaCreacion = fechaCreacion;
        this._estadoPedido = estadoPedido;
        this._precioCompra = precioCompra;
        this._producto = producto;
    }
    set fechaCreacion (fechaCreacion){
        this._fechaCreacion = fechaCreacion;
    }

    set estadoPedido (estadoPedido){
        this._estadoPedido = estadoPedido;
    }

    set precioCompra (precioCompra){
        this._precioCompra = precioCompra;
    }   

    set producto (producto){
        this._producto = producto;
    }

    get idPedidoP(){
        return this._idPedidoP
    }

    get fechaCreacion (){
        return this._fechaCreacion
    }

    get estadoPedido () {
        return this._estadoPedido
    }

    get precioCompra (){
        return this._precioCompra
    }

    get producto (){
        return this._producto
    }
    // metodos
    //le puse P al final para diferenciarlos de pedido normal
    crearPedidoP(){

    }
    eliminarPedidoP(){

    }
    modificarPedidoP(){

    }
    visualizarPedidoP(){
        
    }
}

module.exports = PedidoProveedor;   