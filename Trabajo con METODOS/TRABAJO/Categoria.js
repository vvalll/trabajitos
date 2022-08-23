const Producto = require('./Producto');
const Moto = require('./Moto');

class Categoria{
    constructor(idCategoria, nombreCategoria, producto){

        this._idCategoria = idCategoria;
        this._nombreCategoria = nombreCategoria;
        this._producto = producto;
    }

    get idCategoria(){
        return this._idCategoria;
    }

    get nombreCategoria(){
        return this._nombreCategoria;
    }

    get producto(){
        return this._producto;
    }

    set idCategoria(idCategoria){
        this._idCategoria = idCategoria;
    }

    set nombreCategoria(nombreCategoria){
        this._nombreCategoria = nombreCategoria;
    }

    set producto(producto){
        this._producto = producto;
    }
 
//     incorporarCategoria(Moto){
//         //producto es el var de los datos del producto
//         this._idProducto.push(Moto)
//     }
}


module.exports = Categoria;

