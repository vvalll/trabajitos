console.log('Hola');

setTimeout(()=> {
    console.log('Interrupcion por TimeOut');
}, 2000);

setTimeout(function(){
    console.log('SetTimeout con funcion clasica');
},1000);

function externa(){
    console.log('Soy externa al SetTimeout')
}
setTimeout(externa, 500);

console.log('Mundo');

function saludos(){
    console.log("Hola Mundo");
}
setTimeout(saludos);

console.log('Debo ejecutarme antes del TimeOut');

function saludos(nombre,rol){
    console.log(`Hola, mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);
}

saludos('Juan', 'Medico');
setTimeout(saludos,3000, "Nathan", "Programador");


// Escriba un setimeout dentro de un "for", que se repita n veces, imprima la variable del ciclo dentro del SetTimeOut, luego en otra ejecucion fuera del SetTimeOut y explique el comportamiento. Alterne el ejercicio utilizando let y var en la variable del ciclo.

for (let i = 0; i < 5; i++) {
    var set1 = "Hola, soy un var"
    let set2 = "Hola, soy un let"
    setTimeout(function(){
        console.log(set1);
        console.log(set2);
    }, 3000)
    console.log(`Fuera del setTimeOut`)
}


for (let i = 0; i < 3; i++) {
    let tiempo = "Prueba setTimeOut"
    setTimeout(function(){
        console.log(tiempo);
    })
}

setTimeout(function(){
    for (let i = 0; i < 3; i++) {
        console.log("INTENTO")
    }
}, 3000)


//Como hallar un valor maximo y minimo entre un rango 

console.log(Math.random() * (100 - 20) + 20);

var limites = []; 
for (let i = 0; i < 8; i++) {
    limites[i]= Math.round(Math.random() * (100 - 20) + 20);
}

setTimeout(function(){
    console.log(limites)
}, 3000)

setTimeout(() => {
    for (let i = 0; i < limites.length; i++) {
        console.log(limites[i])    
    }
}, 2000);


// Funcion para llenar un arreglo con numeros aleatorios, esa funcion se la van a pasar a un SetTimeout que dure 3 segundos, mientras transcurren esos 3 segundos, llenar un vector de numeros 1 a traves de una funcion.
x = Math.round(Math.random() * (25-5) + 5);

function numAleatorio(tam){
    var arreglo = [];
    for (let i = 0; i < tam; i++) {
        arreglo[i]= Math.round(Math.random() * (100 - 20) + 20);  
    }
    console.log(arreglo);
}

function num1(veces){
    var arreglo = [];
    for (let i = 0; i < veces; i++) {
        arreglo[i]= 1; 
    }
    console.log(arreglo);
}

setTimeout(numAleatorio, 3000, x);
num1(x);