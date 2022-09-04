const Usuario = require('./Usuario');
const CarritoCompras = require('./CarritoCompras');
const Pedido = require('./Pedido');

class Cliente extends Usuario{ //extends es una herencia
    constructor(idUsuario, nombres, apellidos, tipoDocumento, numeroId, correoElectonico, contraseña, direccion,fechaNacimiento, celular, carritoCompras, pedido){
        super(idUsuario,nombres,apellidos,tipoDocumento,numeroId,correoElectonico,contraseña);
        this._direccion = direccion;
        this._fechaNacimiento = fechaNacimiento;
        this._celular = celular;
        this._carritoCompras = carritoCompras;
        this._pedido = pedido;
    }
    set direccion(direccion){
        this._direccion = direccion;
    }

    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }

    set celular(celular){
        this._celular = celular;
    }

    set carritoCompras(carritoCompras){
        this._carritoCompras = carritoCompras;
    }

    set pedido(pedido){
        this._pedido = pedido;
    }

    get direccion(){
        return this._direccion;
    }

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    get celular(){
        return this._celular;
    }

    get carritoCompras(){
        return this._carritoCompras;
    }

    get pedido(){   
        return this._pedido;
    }
}

module.exports = Cliente;