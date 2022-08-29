const Proveedor = require('./Proveedor.js');
const ProductoProveedor = require('./ProductoProveedor');


class PedidoProveedor {
    constructor(idPedidoP, productoProveedor, proveedor){
        this._idPedidoP = idPedidoP;
        this._productoProveedor = productoProveedor;
        this._proveedor = proveedor;
        this._fecha = new Date; 
    }

    set productoProveedor(productoProveedor){
        this._productoProveedor = productoProveedor;
    }

    set proveedor(proveedor){
        this._proveedor = proveedor;
    }

    get idPedidoP(){
        return this._idPedidoP
    }

    get productoProveedor(){
        return this._productoProveedor
    }

    get fecha (){
        return this._fecha
    }

    get proveedor(){
        return this._proveedor
    }

    

    ContadorProductosP(array){
        // console.log(this._productoProveedor);
        let contador=0
        for (let i = 0; i < array.length; i++) {
            contador=contador + array[i]._cantidadP;
            
        }
        console.log(`La cantidad total de productos es: ${contador}`);
        }
    


    
    añadirAPedidoP(array,productoProveedor,cantidad ){
         let bus = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] == productoProveedor) {
                bus += 1
            }
        }
        if (bus > 0) {
            productoProveedor._cantidadP=cantidad
            
        } else  {
            this._productoProveedor.push(productoProveedor)
            productoProveedor._cantidadP=cantidad
        }
    }


    
}
// --------------------------------laura 
var proveedor1 = new Proveedor("123", "Fulanito Gomez", "31345422333");

var productoP1 = new ProductoProveedor("001", "Pan", 5000, "Rollito", "Bimbo");

var productoP2 = new ProductoProveedor("002", "Galletas", 15000, "Galletas de sal, 12 unidades por paquete", "Saltin");

var pedidoP1 = new PedidoProveedor("111", productosP1 = [], proveedor1);

pedidoP1.añadirAPedidoP(productosP1,productoP1,30);
pedidoP1.añadirAPedidoP(productosP1,productoP2,40);
console.log(pedidoP1)
pedidoP1.ContadorProductosP(productosP1)





module.exports = PedidoProveedor;                                                   