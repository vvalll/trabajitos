const Producto = require('./Producto');
const Pedido = require('./Pedido');

class CarritoCompras {
    constructor(idCarrito, cantidad, fechaAgregacion, producto, pedido){
        this._idCarrito = idCarrito;
        this._cantidad = cantidad;
        this._fechaAgregacion = fechaAgregacion;
        this._producto = producto;
        this._pedido = pedido;
    }

    get idCarrito(){
        return this._idCarrito;
    }

    get cantidad(){
        return this._cantidad;
    }

    get fechaAgregacion(){
        return this._fechaAgregacion;
    }

    get producto(){
        return this._producto;
    }

    get pedido(){
        return this._pedido;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    set fechaAgregacion(fechaAgregacion){
        this._fechaAgregacion = fechaAgregacion;
    }

    set producto(producto){
        this._producto = producto;
    }

    set pedido(pedido){
        this._pedido = pedido;
    }
    //Metodos
    anadirProducto(){
        //añadirProducto
    }
    
    eliminarProducto(){

    }
    actualizarCantidad(){
        
    }
    visualizarDetalles(){

    }
    Subtotal(){
        
    }
}

module.exports = CarritoCompras; 