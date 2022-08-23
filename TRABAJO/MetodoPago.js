class MetodoPago{
    constructor(tipo, nombreBanco, nombreTitular, numeroTarjeta, fechaVencimiento){
        this._tipo = tipo;
        this._nombreBanco = nombreBanco;
        this._nombreTitular = nombreTitular;
        this._numeroTarjeta = numeroTarjeta;
        this._fechaVencimiento = fechaVencimiento;
    }

    get tipo(){
        return this._tipo;
    }

    get nombreBanco(){
        return this._nombreBanco;
    }

    get nombreTitular(){
        return this._nombreTitular;
    }

    get numeroTarjeta(){
        return this._numeroTarjeta;
    }

    get fechaVencimiento(){
        return this._fechaVencimiento;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    set nombreBanco(nombreBanco){
        this._nombreBanco = nombreBanco;
    }

    set nombreTitular(nombreTitular){
        this._nombreTitular = nombreTitular;
    }

    set numeroTarjeta(numeroTarjeta){
        this._numeroTarjeta = numeroTarjeta;
    }

    set fechaVencimiento(fechaVencimiento){
        this._fechaVencimiento = fechaVencimiento;
    }
}

module.exports = MetodoPago;