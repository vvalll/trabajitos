// Primero: hacer que se llene un arreglo aleatoriamente de 15 elementos y se imprima infinitamente:

var vec = [];
for (let i = 0; i < 15; i++) {
    vec[i] = Math.round(Math.random()*100);
}

var k = 0; 
setInterval(() => {
   console.log(vec[k])
   k++;
   k==10 ? k=0 : k=k 
}, (1000));

// Mision: Por que cambia con let y var?

for (let j = 0; j < 10; j++) {
    setTimeout(() => {
        console.log(j)
    }, (1000 * j));
}

setInterval(() => {
    console.log('Amo el SENA');
}, 1000);

// Repetir con el intervalo de 2 segundos

let timerId = setInterval(() => console.log('tick'), 2000);

// Despues de 5 segundos parar

setTimeout(() => {
   clearInterval(timerId); 
   console.log('Stop')
}, 5000);


