const Producto = require('./Producto');
const PedidoProveedor = require('./PedidoProveedor');

class Inventario {
    constructor(idInventario, producto, pedidoProveedor){
        this._idInventario = idInventario;
        this._producto = producto;
        this._pedidoProveedor = pedidoProveedor;
    } 

    get idInventario(){
        return this._idInventario;
    }

    get producto(){
        return this._producto;
    }

    get pedidoProveedor(){
        return this._pedidoProveedor;
    }

    set idInventario(idInventario){
        this._idInventario = idInventario;
    }

    set producto(producto){
        this._producto = producto;
    }

    set pedidoProveedor(pedidoProveedor){
        this._pedidoProveedor = pedidoProveedor;
    }
}

module.exports = Inventario; 