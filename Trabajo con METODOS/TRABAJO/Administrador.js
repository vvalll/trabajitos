const Usuario = require('./Usuario');
const PedidoProveedor = require('./PedidoProveedor');

class Administrador extends Usuario{ //extends es una herencia
    constructor(idUsuario, nombres, apellidos, tipoDocumento, numeroId, correoElectonico, contraseña, pedidoProveedor){
        super(idUsuario,nombres,apellidos,tipoDocumento,numeroId,correoElectonico,contraseña);
        this._pedidoProveedor = pedidoProveedor;
    }

    get pedidoProveedor(){
        return this._pedidoProveedor;
    }

    set pedidoProveedor(pedidoProveedor){
        this._pedidoProveedor = pedidoProveedor;
    }
    //Metodos
    actualizarCategorias(){

    }
    agregarCategoria(){

    }
    eliminarCategoria(){

    }
    actualizarProductos(){

    }
    eliminarProducto(){

    }
    consultarCliente(){
        
    }
    buscarCliente(){

    }
    borrarCliente(){

    }
}

module.exports = Administrador;
