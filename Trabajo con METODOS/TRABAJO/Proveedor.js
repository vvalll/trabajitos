const PedidoProveedor = require('./PedidoProveedor');

class Proveedor {
    constructor(NIT, nombreProveedor, ubicacion, telefono, pedidoProveedor) {
        this._NIT = NIT;
        this._nombreProveedor = nombreProveedor;
        this._ubicacion = ubicacion;
        this._telefono = telefono;
        this._pedidoProveedor = pedidoProveedor;
    }

    set nombreProveedor(nombreProveedor) {
        this._nombreProveedor = nombreProveedor;
    }

    set ubicacion(ubicacion) {
        this._ubicacion = ubicacion;
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    set pedidoProveedor(pedidoProveedor) {
        this._pedidoProveedor = pedidoProveedor;
    }

    get NIT() {
        return this._NIT;
    }

    get nombreProveedor() {
        return this._nombreProveedor;
    }

    get ubicacion() {
        return this._ubicacion;
    }

    get telefono() {
        return this._telefono;
    }

    get pedidoProveedor() {
        return this._pedidoProveedor;
    }
    //metodos
    buscarProveedor() {
        
    }
}

module.exports = Proveedor;