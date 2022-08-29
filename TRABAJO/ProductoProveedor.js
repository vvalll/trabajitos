class ProductoProveedor {
    constructor(idProductoP, nombrePP, precioComprado, detalles, marca, ){
        this._idProductoP = idProductoP;
        this._nombrePP = nombrePP;
        this._precioComprado = precioComprado;
        this._detalles= detalles;
        this._marca= marca;
        this._cantidadP= 1;
    }

    set nombrePP(nombrePP) {
        this._nombrePP = nombrePP;
    }

    set precioComprado(precioComprado){
        this._precioComprado= precioComprado;
    }

    set detalles(detalles){
        this._detalles = detalles;
    }

    set marca(marca){
        this._marca= marca;
    }

    set cantidadP(cantidadP){
        this._cantidadP= cantidadP;
        }    

    get idProductoP(){
        return this._idProductoP;

    }    
    get nombrePP(){ 
        return this._nombrePP;
    }

    get precioComprado(){ 
        return this._precioComprado;
    }

    get detalles(){
        return this._detalles;
        }

    get marca(){
        return this._marca;
        }

    get cantidadP(){
        return this._cantidadP;
        }

        
}

module.exports = ProductoProveedor 



