class Productos {
  constructor(nombre, precio, stock) {
    this._nombre = nombre;
    this._precio = precio;
    this._stock = stock;
  }

  get nombre() {
    return this._nombre;
  }

  get precio() {
    return this._precio;
  }

  get stock() {
    return this._stock;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  set stock(stock) {
    this._stock = stock;
  }
  set precio(precio) {
    this._precio = precio;
  }
}

//agregar producto
const producto1 = new Productos("espejo", 3500, 15);
const producto2 = new Productos("marcadores", 2600, 80);
const producto3 = new Productos("balon", 30000, 8);

//arreglo
var tienda = [];
var suma = 0; //variable global
tienda.push(producto1, producto2, producto3);

//crear la funcion principal
function negocio(callback1, callback2, callback3, arreglo) {
  console.log("gestionando los productos...");
  console.log(tienda);
  callback1();
  callback2();
  callback3();
}
//general
function promedio() {
  setTimeout(() => {
    for (let i = 0; i < tienda.length; i++) {
      suma += tienda[i].precio;
    }
    promedio = suma / tienda.length;
    console.log(`El promedio del productos es: ${promedio}`);
  }, 2000);
}
//individual
function ganancia() {
  setTimeout(() => {
    var total = 0;
    for (let i = 0; i < tienda.length; i++) {
      total = tienda[i].precio * tienda[i].stock;
      console.log(`Las ganancias o total del producto son: ${total}`);
    }
  }, 3000);
}
//comparar stocks
function ordenar() {
  setTimeout(() => {
    var aux = 0;
    for (let i = 0; i < tienda.length - 1; i++) {
      for (let j = i + 1; j < tienda.length; j++) {
        if (tienda[i].stock < tienda[j].stock) {
          aux = tienda[j];
          tienda[j] = tienda[i];
          tienda[i] = aux;
        }
      }
    }
    console.log("El orden de los productos de mayor a menor quedó:");
    console.log(tienda);
  }, 4000);
}
//llamar las funciones a usar
negocio(promedio, ganancia, ordenar, tienda)