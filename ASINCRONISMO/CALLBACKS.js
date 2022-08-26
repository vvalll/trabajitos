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
    console.log(`Vamos a preparar una deliciosa pizza napolitana. Los ingredientes son:`)
}


function masa(ingrediente1, ingrediente2, ingrediente3, ingrediente4, ingrediente5,ingrediente6, ingrediente7, ingrediente8, instrumento1, instrumento2, instrumento3) {
    console.log(`Colocar la ${ingrediente1} mezclada con una pisca de ${ingrediente2} sobre la mesa y haz un hueco en el centro para dar forma de corona`);

    setTimeout(() => {
       console.log(`Coge un bol y vierte el ${ingrediente3} junto con el ${ingrediente4} y la ${ingrediente5}. Revuelvelo todo hasta disolver por completo la ${ingrediente5} y vierte la mezcla en el centro de la corona de ${ingrediente1}`) 
    }, 2000);

    setTimeout(() => {
        console.log(`Integra poco a poco los ingredientes hasta obtener una masa homogenea. Amasa durante 7 minutos sobre la mesa, haz una bola con la masa y cubrela con ${instrumento1}. Deja que repose durante 20 minutos.`)
    }, 4000);

    setTimeout(() => {
        console.log(`Pasado el tiempo, estira la masa con la ayuda de un ${instrumento2} y pasala a la ${instrumento3}. Ahora es momento de rellenarla `)
    }, 6000);

    setTimeout(() => {
       console.log(`Enharina una ${instrumento3} `); 
    }, 5000);
//----
    setTimeout(() => {
       console.log(`Extiene la ${ingrediente6} sobre la base de la pizza dejando libre un borde de 1 cm.`) 
    }, 8000);

    setTimeout(() => {
        console.log(`Distribuye la ${ingrediente7} rallada por todas partes y hornea la pizza durante 10 minutos a 170°C`)
    }, 10000);

    setTimeout(() => {
       console.log(`Ralla la ${ingrediente7}`) 
    }, 9000);

    setTimeout(() => {
        console.log(`Retirala y cubrela con los ${ingrediente8} cortados en rodajas `)
    }, 12000);

    setTimeout(() => {
       console.log(`Corta los ${ingrediente8}`) 
    }, 11000);


}


//harina, sal, agua, aceite, levadura fresca, salsa de tomate, mozzarella, tomates

//papelfilm, rodillo, bandeja de horno

//https://www.recetasgratis.net/receta-de-pizza-napolitana-32625.html


//Hacer desviacion estandar de arreglos con funciones (media, etc)
// ordenar de mayor stock a menor y el promedio de precio de los productos dentro de una rreglo de acuerdo nuestra pagina web. Calcular la ganacia de producto de acuerdo a la cantidad de hay, cada una es una funcion que va dentro de una funcion grande que hay que llamar como callbacks. Leer paginas 349- 354 (capitulo Callbacks)