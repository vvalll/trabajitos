const Pedido = require('./Pedido');

class Factura{
    constructor(idFactura, fecha, impuestos, tasaCambio, pedido){
        this._idFactura = idFactura;
        this._fecha = fecha;
        this._impuestos = impuestos;
        this._tasaCambio = tasaCambio;
        this._pedido = pedido;
    }

    get idFactura(){
        return this._idFactura;
    }

    get fecha(){
        return this._fecha;
    }

    get impuestos(){
        return this._impuestos;
    }

    get tasaCambio(){
        return this._tasaCambio;
    }

    get pedido(){
        return this._pedido;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    set impuestos(impuestos){
        this._impuestos = impuestos;
    }

    set tasaCambio(tasaCambio){
        this._tasaCambio = tasaCambio;
    }

    set pedido(pedido){
        this._pedido = pedido;
    }

    //Metodos
    totalE(){

    }
    crearFactura(){

    }
    
    editarFactura(){
        
    }
    generarReporte(){
            
    }
    buscarFactura(){
        
    }
}

module.exports = Factura; 