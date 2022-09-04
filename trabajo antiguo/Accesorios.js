const Producto = require('./Producto');

class Accesorios extends Producto  {
    constructor(idProducto, nombreProducto, precioProducto, detalles, marca, cantidad, precioComprado, tipoAccesorio){
        super(idProducto, nombreProducto, precioProducto, detalles, marca, cantidad, precioComprado);
        this._tipoAccesorio = tipoAccesorio;
    }
    set tipoAccesorio(tipoAccesorio){
        this._tipoAccesorio = tipoAccesorio;
    }
   
    get tipoAccesorio(){
        return this._tipoAccesorio;
    }
}

module.exports = Accesorios;
