const Moto = require('./Moto');

class ServicioDeRastreo  {
    constructor(tiempo, idRastreo, moto){

        this._tiempo = tiempo;
        this._idRastreo = idRastreo;
        this._moto = moto;
    }

    set tiempo(tiempo){
        this._tiempo = tiempo;
    }

    set idRastreo(idRastreo){
        this._idRastreo = idRastreo;
    }

    set moto(moto){
        this._moto = moto;
    }

    get tiempo(){
        return this._tiempo;
    }

    get idRastreo(){
        return this._idRastreo;
    }

    get moto(){
        return this._moto;
    }

    //metodos
    localizar(){
    }

    cancelarServicio(){
    }
}


module.exports = ServicioDeRastreo;
