function pruebaCallback(callback, name){
    setTimeout(() => {
       console.log('Dentro de pruebaCallback') 
    }, 2000);
    callback(name);
}

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}

pruebaCallback(saludo, 'Val');

//------------------------------------------------------------------

function pruebaCallback2(callback1, callback2, name){
    callback1(name);
    setTimeout(() => {
       console.log('Dentro de pruebaCallback') 
    }, 2000);
    callback2(name);
}
function saludito(nombre){
    console.log(`Hola ${nombre}`);
}

function contarLetras(nombre){
    console.log(nombre.length);
}
pruebaCallback2(contarLetras, saludito, 'Val');


// Escribir una receta de cocina, tiene secuencias: funcion principal con varias funciones 

function recetaPizza(masa, relleno ) {
    console.log(`Vamos a preparar una deliciosa pizza napolitana.`)
    masa()
    relleno()
}


function masa() {
    console.log(`Colocar la harina mezclada con una pisca de sal sobre la mesa y haz un hueco en el centro para dar forma de corona`);

    setTimeout(() => {
        console.log(`Vamos a empezar a hacer la masa:`)
    }, 1000);

    setTimeout(() => {
       console.log(`Coge un bol y vierte el agua junto con el aceite y la levadura fresca. Revuelvelo todo hasta disolver por completo la levadura fresca y vierte la mezcla en el centro de la corona de harina`) 
    }, 2000);

    setTimeout(() => {
        console.log(`Integra poco a poco los ingredientes hasta obtener una masa homogenea. Amasa durante 7 minutos sobre la mesa, haz una bola con la masa y cubrela con harina. Deja que repose durante 20 minutos.`)
    }, 4000);

    setTimeout(() => {
        console.log(`Pasado el tiempo, estira la masa con la ayuda de un sal y pasala a la agua. Ahora es momento de rellenarla `)
    }, 6000);

    setTimeout(() => {
       console.log(`Enharina una agua`); 
    }, 5000);
}
//----

function relleno(){

    setTimeout(() => {
        console.log(`Continuamos con el relleno: `)
    }, 7000);

    setTimeout(() => {
       console.log(`Extiende la salsa de tomate sobre la base de la pizza dejando libre un borde de 1 cm.`) 
    }, 8000);

    setTimeout(() => {
        console.log(`Distribuye la mozzarella rallada por todas partes y hornea la pizza durante 10 minutos a 170°C`)
    }, 10000);

    setTimeout(() => {
       console.log(`Ralla la mozzarella`) 
    }, 9000);

    setTimeout(() => {
        console.log(`Retirala y cubrela con los tomates cortados en rodajas `)
    }, 12000);

    setTimeout(() => {
       console.log(`Corta los tomates`) 
    }, 11000);

    setTimeout(() => {
        console.log(`Añade sal a gusto, reparte el ajo y el perejil picados ` )
    }, 14000);

    setTimeout(() => {
        console.log(`Pica el ajo y el perejil`)
    }, 13000);

    setTimeout(() => {
        console.log(`Incorpora las aceitunas y rocia la pizza casera con un hilo de aceite de oliva`);
    }, 16000);

    setTimeout(() => {
        console.log(`Hornea la pizza durante 5 minutos mas y retirala para servila`)
    }, 18000);
}

recetaPizza(masa, relleno)




//Hacer desviacion estandar de arreglos con funciones (media, etc)
// ordenar de mayor stock a menor y el promedio de precio de los productos dentro de una rreglo de acuerdo nuestra pagina web. Calcular la ganacia de producto de acuerdo a la cantidad de hay, cada una es una funcion que va dentro de una funcion grande que hay que llamar como callbacks. Leer paginas 349- 354 (capitulo Callbacks)