const CarritoCompras = require('./CarritoCompras');
const Producto = require('./Producto');
const Pedido = require('./Pedido');


var producto1 = new Producto(626, "Moto electrica", 6000000, "Moto electrica para 26 km con llave proximidad", "Xiaomi", 120, 2000000); 

var producto2 = new Producto(8608, "Monotraje", 600000, "Monotraje con proteccion en las rodillas, codos y parte de la espalda, color rojo con blanco", "STAR", 80, 400000);


var carritocompra1 = new CarritoCompras(0001, 100, "18 Agosto 2022", carrito1=[], 24422); //producto 

console.log(carritocompra1.productos,"-----------------------------")
carritocompra1.añadirproducto(producto1,30)
console.log(carritocompra1.productos)