class Proveedor {
    constructor(NIT, nombreProveedor, telefono) {
        this._NIT = NIT;
        this._nombreProveedor = nombreProveedor;
        this._telefono = telefono;
    }

    set nombreProveedor(nombreProveedor) {
        this._nombreProveedor = nombreProveedor;
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    get NIT() {
        return this._NIT;
    }

    get nombreProveedor() {
        return this._nombreProveedor;
    }


    get telefono() {
        return this._telefono;
    }

}

module.exports = Proveedor;