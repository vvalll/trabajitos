let promesaC = new Promise(function contador(resolve, reject){
    resolve("Start counting");
    reject("Error");
})

.then(value => {
    console.log(value);
    return "One";
})

.then(value => {
    console.log(value);
    return "Two";
})

.then(value => {
    console.log(value);
    return "Three";
})

.then(value => {
    console.log(value);
})

.catch(value => {
    console.log(value);
})

//--

let promesaN = new Promise(function contadorNumerico(resolve, reject){
    
    resolve("Start counting");    
    reject("Error");
    
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, 1000); 
    return 1;
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, 2000);
    return value+1;
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, 3000);
    return value+1 ;
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, 4000);
})

.catch(value => {
    console.log(value);
})


//---

let promesaProfe = new Promise(function contadorProfe(resolve, reject){
    
    resolve("Start counting");    
    reject("Error");
    
})

let x = 1;
let tiempo = 1000
promesaProfe.then(value => {
    setTimeout(() => {
        console.log(value);
    }, tiempo); 
    return x;
})

.then(x => {
    setTimeout(() => {
        console.log(x);
    }, tiempo += 1000);
    return x+1;
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, tiempo += 1000);
    return value + 1 ;
})

.then(value => {
    setTimeout(() => {
        console.log(value);
    }, tiempo += 1000);
})

.catch(value => {
    console.log(value);
})

//--------------

function miPromesa(nombre){
    return new Promise(( resolve, reject) =>{
        setTimeout(() => {
           console.log(`Hola ${nombre}`)
           resolve(nombre); 
        }, 1000);
    });
}

miPromesa("Soacha")
.then((value)=>{
    console.log(`Saludo a ${value}`)
    return value;
});
miPromesa.then(externa)

function externa(parametro){
    setTimeout(() => {
       console.log(`Dato recibido del then: ${parametro}`)
       console.log(`Soy una funcion externa`)
       console.log(`Con retardo de 2 segundos`) 
    }, 2000 );
}


//________________________________

function precioTotalProductos(){
    let contador2 = 0;
    let suma = 0
    for (let i = 0; i < this._productos.length; i++) { 
        contador2 = this._productos[i]._precioProducto * this._productos[i]._cantidad;   
        suma = suma + contador2;     
    }
    console.log(`El precio total de productos en el carrito es ${suma}`);
}

function presupuesto(presupuestoInicial, callback){
    callback()
    var sobrante = presupuestoInicial - suma;

    if (subtotal > presupuestoInicial) {
        console.log(`Su presupuesto ha alcanzado al limite, le faltan ${Math.abs(sobrante)}`)
    } else {
        console.log(`Le queda ${sobrante} del presupuesto inicial`)  
    }
}

presupuesto(600000, precioTotalProductos)


// function promesitaCosto(){
//     return new Promise((resolve, reject) => {
//         resolve("Agregar al carrito:")
//     })
// }

// promesitaCosto.then(precioTotalProductos)
// setTimeout(promesitaCosto, 2000);

// promesitaCosto.then(presupuesto)


let productos = new Promise(function ProductosCarro(resolve, producto1, precio1, cantidad1, reject){
    resolve(producto1, precio1, cantidad1);
    reject("Producto rechazado")
})
let array = []; 
productos.then(value => {
    producto1 = "Pan";
    precio1 = 3000;
    cantidad1 = 2
    console.log(producto1, precio1, cantidad1);
    array.push(producto1, precio1, cantidad1);

    return producto1, precio1, cantidad1;
})


.then(value => {
    producto1 = "Arroz";
    precio1 = 8000;
    cantidad1 = 3;
    console.log(producto1, precio1, cantidad1);
    array.push(producto1, precio1, cantidad1);
    return producto1, precio1, cantidad1;
})

.then(value => {
    producto1 = "Pizza";
    precio1 = 15000;
    cantidad1 = 2;
    console.log(producto1, precio1, cantidad1);
    array.push(producto1, precio1, cantidad1);
    console.log(array)
})

.then(presupuestoProductos)


.catch(value => {
    console.log(value);
})


function presupuestoProductos(){
    let contador = 0;
    let suma = 0;
    for (let i = 0; i < 2; i++) {
        contador = this.precio1 * this.cantidad1;
        suma = suma + contador;
    }
    console.log(`El precio total de los productos en el carrito es ${suma}`);

    var presupuestoInicial = 70000

    var sobrante = presupuestoInicial - suma;

    if (suma > presupuestoInicial) {
        console.log(`Su presupuesto ha alcanzado al limite, le faltan ${Math.abs(sobrante)}`)
    } else {
        console.log(`Le queda ${sobrante} del presupuesto inicial`)  
    }
}


// function presupuestoCompras(presupuestoInicial, callback){
//     callback()
//     var sobrante = presupuestoInicial - callback();

//     if (callback() > presupuestoInicial) {
//         console.log(`Su presupuesto ha alcanzado al limite, le faltan ${Math.abs(sobrante)}`)
//     } else {
//         console.log(`Le queda ${sobrante} del presupuesto inicial`)  
//     }
// }
// presupuestoCompras(70000, preciofinalProductos)



