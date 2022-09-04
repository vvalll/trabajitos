const Producto = require('./Producto');
const Pedido = require('./Pedido');

class CarritoCompras {
    constructor(idCarrito, productos, ){
        this._idCarrito = idCarrito;
        this._cantidad = 0;
        this._fechaAgregacion = new Date;
        this._productos = productos;
        
    }

    get idCarrito(){
        return this._idCarrito;
    }

    get cantidad(){
        return this._cantidad;
    }

    get fechaAgregacion(){
        return this._fechaAgregacion;
    }

    get productos(){
        return this._productos;
    }

   

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    set fechaAgregacion(fechaAgregacion){
        this._fechaAgregacion = fechaAgregacion;
    }

    set productos(productos){
        this._productos = productos;
    }


    ContadorProductos(){
        let contador=0
        for (let i = 0; i < this._productos.length; i++) {
            contador=contador + this._productos[i]._cantidad;
        }
        console.log(`La cantidad total de productos en el carrito es: ${contador}`);
        }
    

    añadirACarrito( producto, cantidadProduct ){
         let bus = 0
        for (let i = 0; i < this._productos.length; i++) {
            if (this._productos[i] == producto) {
                bus += 1
            }
        }
        if (bus > 0) {
            producto._cantidad = cantidadProduct
            this._cantidad=this._cantidad+cantidadProduct
            
        } else  {
            this._productos.push(producto)
            producto._cantidad = cantidadProduct
            this._cantidad=this._cantidad+cantidadProduct
        }
    }
    
    presupuesto(presupuestoInicial, callback,array){
        let suma = callback(array)
        var sobrante = presupuestoInicial - suma;
    
        if (suma > presupuestoInicial) {
            console.log(`Su presupuesto ha alcanzado al limite, le faltan ${Math.abs(sobrante)}`)
        } else {
            console.log(`Le queda ${sobrante} del presupuesto inicial`)  
        }
        
    }
}

function PrecioTotal(array){
    let contador2 = 0;
    let suma = 0
    for (let i = 0; i < array._productos.length; i++) { 
        contador2 = array._productos[i]._precioProducto * array._productos[i]._cantidad;   
        suma = suma + contador2;     
    }
    console.log(`El precio total de productos en el carrito es ${suma}`);
    return suma
}

 

var productoC1 = new Producto("321", "Moto", 200000, "Moto negra", "suzuki");
var productoC2 = new Producto("432", "Casco", 400000, "Casco negra", "suzuki");
var carrito1 = new CarritoCompras("001",Compras = [])

carrito1.añadirACarrito(productoC1,5)
carrito1.añadirACarrito(productoC2,10)
console.log(carrito1)


// carrito1.presupuesto(6000000,PrecioTotal,carrito1)



module.exports = CarritoCompras; 