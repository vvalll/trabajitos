const Pedido = require('./Pedido');

class Envio{
    constructor(idEnvio, tipoEnvio, costoEnvio, direccion, fechaEnvio, tiempoEstimado, lugarOrigen, pedido){
        this._idEnvio = idEnvio;
        this._tipoEnvio = tipoEnvio;
        this._costoEnvio = costoEnvio;
        this._direccion = direccion;
        this._fechaEnvio = fechaEnvio;
        this._tiempoEstimado = tiempoEstimado;
        this._lugarOrigen = lugarOrigen;
        this._pedido = pedido;
    }

    get idEnvio(){
        return this._idEnvio;
    }

    get tipoEnvio(){
        return this._tipoEnvio;
    }

    get costoEnvio(){
        return this._costoEnvio;
    }

    get direccion(){
        return this._direccion;
    }

    get fechaEnvio(){
        return this._fechaEnvio;
    }

    get tiempoEstimado(){
        return this._tiempoEstimado;
    }

    get lugarOrigen(){
        return this._lumpoOrigen;
    }

    get pedido(){
        return this._pedido;
    }

    set tipoEnvio(tipoEnvio){
        this._tipoEnvio = tipoEnvio;
    }

    set costoEnvio(costoEnvio){
        this._costoEnvio = costoEnvio;
    }

    set direccion(direccion){
        this._direccion = direccion;
    }

    set fechaEnvio(fechaEnvio){
        this._fechaEnvio = fechaEnvio;
    }

    set tiempoEstimado(tiempoEstimado){
        this._tiempoEstimado = tiempoEstimado;
    }

    set lugarOrigen(lumpoOrigen){
        this._lumpoOrigen = lumpoOrigen;
    }

    set pedido(pedido){
        this._pedido = pedido;
    }
}

module.exports = Envio; 