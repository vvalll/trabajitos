const Accesorios = require('./Accesorios');
const Administrador = require('./Administrador');
const CarritoCompras = require('./CarritoCompras');
const Categoria = require('./Categoria');
const Cliente = require('./Cliente');
const Devolucion = require('./Devolucion');
const Envio = require('./Envio');
const Factura = require('./Factura');
const Inventario = require('./Inventario');
const MetodoPago = require('./MetodoPago');
const Moto = require('./Moto');
const Pedido = require('./Pedido');
const PedidoProveedor = require('./PedidoProveedor');
const Producto = require('./Producto');
const Proveedor = require('./Proveedor');
const ServicioDeRastreo = require('./ServicioDeRastreo');
const Usuario = require('./Usuario');


var usuario1 = new Usuario(2, "Jeferson", "Barbosa Utria", "Cedula Extranjeria", 1013638353, "fefersiton@gmail.com", "j123");

var accesorio1 = new Accesorios(123, "Casco", 500000, "Casco negro en fibra de carbono con visor tornasol", "GVC", 35, 250000, "Seguridad");

var producto1 = new Producto(626, "Moto electrica", 6000000, "Moto electrica para 26 km con llave proximidad", "Xiaomi", 120, 2000000); 

var producto2 = new Producto(8608, "Monotraje", 600000, "Monotraje con proteccion en las rodillas, codos y parte de la espalda, color rojo con blanco", "STAR", 80, 400000);

var pedidoProveedor1 = new PedidoProveedor(999, "30 junio 2022", "Recibido", 100000000, "" ); //producto

var proveedor1 = new Proveedor(525233, "Kawasaki", "Japon", 77889922, pedidoProveedor1);

var administador1 = new Administrador(111, "Laura Valentina", "Amaya Garzon", "C.C", 1011080636, "laura@gmail.com", "1234", pedidoProveedor1);

var metodopago1 = new MetodoPago("Debito", "Davivienda", "Jesus Utria", "1011085224", "Diciembre 2029");

var pedido1 = new Pedido(usuario1, 24422, "7 Julio 2022", "Salio", "", metodopago1);

var carritocompra1 = new CarritoCompras(0001, 100, "18 Agosto 2022", carrito1=[], pedido1); //producto 

var categoria1 = new Categoria(101,"Sport", ""); //producto

var factura1 = new Factura(112233, "20 Agosto 2022", 16, 3450, pedido1 );  

var cliente1 = new Cliente(666, "Jeferson", "Barbosa Utria", "Cedula Extranjeria", 1013638353, "fefersiton@gmail.com", "j123", "Calle 1B #55c-22", "26 octubre 1999", "3193094922", carritocompra1, pedido1); 

var devolucion1 = new Devolucion(555, "21 agosto 2022", "Salio defectuoso", factura1);

var envio1 = new Envio(2223, "Maritima", 45000, "Calle 1B #55c-22", "22 octubre 2022", "30 noviembre 2022", "Canada", pedido1); 

var inventario1 = new Inventario(777, "", pedidoProveedor1); //producto

var moto1 = new Moto(2626, "TRK", 150000000, "Moto blanca con rojo, que hace br br", "BMW", 10, 135000000, "2023", "De combustion", 1250, "ABC123", 1800000);

var servicioRastreo1 = new ServicioDeRastreo("30 dias", 8887, moto1);
 

//console.log(accesorio1, administador1, carritocompra1, categoria1, cliente1, devolucion1, envio1, factura1, inventario1, metodopago1, moto1, pedido1, pedidoProveedor1, producto1, proveedor1, servicioRastreo1, usuario1)
console.log(carritocompra1.productos)
carritocompra1.añadirproducto(producto1)
console.log(carritocompra1)