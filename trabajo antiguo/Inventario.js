const Producto = require('./Producto');
const PedidoProveedor = require('./PedidoProveedor');
const ProductoProveedor = require('./ProductoProveedor');

class Inventario {
    constructor(idInventario, producto, pedidoProveedor, productoProveedor) {
        this._idInventario = idInventario;
        this._producto = producto;
        this._pedidoProveedor = pedidoProveedor;
        this._productoProveedor = productoProveedor;
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

    get productoProveedor(){
        return this._productoProveedor;
    }

    set producto(producto){
        this._producto = producto;
    }

    set pedidoProveedor(pedidoProveedor){
        this._pedidoProveedor = pedidoProveedor;
    }

    set productoProveedor(productoProveedor){
        this._productoProveedor = productoProveedor;
    }

    ContadorProductosInventario(array){
        let contador=0
        for (let i = 0; i < array.length; i++) {
            contador=contador + array[i]._cantidad;
            
        }
        console.log(`La cantidad total de productos en el inventario es: ${contador}`);
        }
    

    añadirAInventarioP(array, producto, cantidad ){
         let bus = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] == producto) {
                bus += 1
            }
        }
        if (bus > 0) {
            producto._cantidad = cantidad
            
        } else  {
            this._producto.push(producto)
            producto._cantidad = cantidad
        }
    }

}

module.exports = Inventario; 