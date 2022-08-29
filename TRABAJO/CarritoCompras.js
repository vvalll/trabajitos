const Producto = require('./Producto');
const Pedido = require('./Pedido');

class CarritoCompras {
    constructor(idCarrito, productos, pedido){
        this._idCarrito = idCarrito;
        this._cantidad = 1;
        this._fechaAgregacion = new Date;
        this._productos = productos;
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

    get productos(){
        return this._productos;
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

    set productos(productos){
        this._productos = productos;
    }

    set pedido(pedido){
        this._pedido = pedido;
    }

    ContadorProductos(array){
        let contador=0
        for (let i = 0; i < array.length; i++) {
            contador=contador + array[i]._cantidad;
            
        }
        console.log(`La cantidad total de productos en el carrito es: ${contador}`);
        }
    

    añadirACarrito(array, producto, cantidad ){
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

var productoC1 = new Producto("321", "Moto", 2000000, "Moto negra", "suzuki");
var productoC2 = new Producto("432", "Casco", 400000, "Casco negra", "suzuki");

var pedido1 = new Pedido([])


module.exports = CarritoCompras; 