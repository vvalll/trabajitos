class Usuario{
    constructor(idUsuario,nombres,apellidos,tipoDocumento,numeroId,correoElectonico,contraseña){
        this._idUsuario = idUsuario;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._tipoDocumento = tipoDocumento;
        this._numeroId = numeroId;
        this._correoElectonico = correoElectonico;
        this._contraseña = contraseña;
    }

    set nombres(nombres){
        this._nombres = nombres;
    }

    set apellidos(apellidos){
        this._apellidos = apellidos;
    }
    
    set tipoDocumento(tipoDocumento){
        this._tipoDocumento = tipoDocumento;
    }

    set correoElectonico(correoElectonico){
        this._correoElectonico = correoElectonico;
    }

    set contraseña(contraseña){
        this._contraseña = contraseña;
    }

    get idUsuario(){
        return this._idUsuario;
    }

    get nombres(){
        return this._nombres;
    }

    get apellidos(){
        return this._apellidos;
    }

    get tipoDocumento(){
        return this._tipoDocumento;
    }

    get numeroId(){
        return this._numeroId;
    }

    get correoElectonico(){
        return this._correoElectonico;
    }

    get contraseña(){
        return this._contraseña;
    }
    
}

module.exports = Usuario;
