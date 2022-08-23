class Producto{
    constructor(idProducto, nombreProducto, precioProducto, detalles, marca, cantidad, precioComprado){
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioProducto = precioProducto;
        this._detatalles = detalles;
        this._marca = marca;
        this._cantidad = cantidad;
        this._precioComprado = precioComprado;
    }
   
    set nombreProducto(nombreProducto){
        this._nombreProducto = nombreProducto;
    }

    set precioProducto(precioProducto){
        this._precioProducto = precioProducto;
    }

    set detalles(detalles){
        this._detalles = detalles;
    }

    set marca(marca){
        this._marca = marca;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    set precioComprado(precioComprado){
        this._precioComprado = precioComprado;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombreProducto(){
        return this._nombreProducto;
    }

    get precioProducto(){
        return this._precioProducto;
    }

    get detalles(){
        return this._detalles;
    }

    get marca(){
        return this._marca;
    }

    get cantidad(){
        return this._cantidad;
    }

    get precioComprado(){
        return this._precioComprado;
    }
    //metodos
    crearProducto () {

    }
    eliminar(){

    }
    ganancias(){

    }
}

module.exports = Producto;