const Usuario = require('./Usuario');
const MetodoPago = require('./MetodoPago');
const Producto = require('./Producto');

class Pedido {
    constructor(usuario, idPedido, metodoPago, producto){
        this._usuario = usuario;
        this._idPedido = idPedido;
        this._fechaCreacion = new Date;
        this._metodoPago = metodoPago;
        this._producto = producto;
    }

    get usuario(){
        return this._usuario;
    }

    get idPedido(){
        return this._idPedido;
    }

    get metodoPago(){
        return this._metodoPago;
    }

    get producto(){
        return this._producto;
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    set metodoPago(metodoPago){
        this._metodoPago = metodoPago;
    }

    set producto(producto){
        this._producto = producto;
    }

    ContadorProductos(array){
        let contador=0
        for (let i = 0; i < array.length; i++) {
            contador=contador + array[i]._cantidad;
            
        }
        console.log(`La cantidad total de productos es: ${contador}`);
        }
    

    añadirAPedido(array,producto,cantidad ){
         let bus = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] == producto) {
                bus += 1
            }
        }
        if (bus > 0) {
            producto._cantidad = cantidad
            
        } else  {
            this._producto.push(producto)
            producto._cantidad = cantidad
        }
    }
}

var usuario1 = new Usuario("123", "Jesus", "Utria", "C.C", "1011089988", "jesus@gmail.com", "1234");

var metodoPago1 = new MetodoPago("Credito", "Davivienda", "Jesus Utria", "4232323", "08/2028");

var producto1 = new Producto("01", "patatas", 12000, "Sabrosas", "pringles");

var producto2 = new Producto("02", "nuggets", 13000, "Ricas", "McDonlads");

var pedidoN1 = new Pedido(usuario1, "010", metodoPago1, productosA = []);

pedidoN1.añadirAPedido(productosA, producto1, 6);
pedidoN1.añadirAPedido(productosA, producto2, 8);

pedidoN1.ContadorProductos(productosA);

console.log(pedidoN1);



module.exports = Pedido; 