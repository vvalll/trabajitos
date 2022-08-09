// 1. Determinar los divisores de un número introducido por
//teclado
count = 0;
while (count < 6) {
    ++count
    var num = 12;
    var divs = num % count;

    if (divs == 0) {
        console.log(`${count} es divisor de ${num}`)
}   else {
        console.log(`${count} no es divisor de ${num}`)
} 
}




// 2. Determinar si un numero es o no es primo 

pri = 1
nume = 10
for (let i = 2; i < nume; i++) {
    if (nume % i == 0) {
        pri = 2
    }
}
if (pri == 1) {
    console.log(`${nume} es primo`)
} else if (pri == 2) {

    console.log(`${nume} no es primo`)
}


//12. Escribir un programa que visualice la siguiente figura,
//utilizando ciclos. El usuario decide cuantas líneas quiere
//imprimir
/*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
* * * * * * * * */

var fg = "* ";
var final = 9; 
console.log(fg)
for (let i = 0; i < final ; i++) {
    for (let i = 0; i < final ; i++) {
        i = "* "
        fg += i
        console.log(fg) 
    }
}



//8. Determinar cuales son los múltiplos de 5 comprendidos entre
//1 y N. 

var multip = 10; 
var prin = 5;
console.log(`Los multiplos del numero ${prin} comprendidos entre 1 y ${multip} son: `)
for (let i = 1; i <= multip; i++) {
    operacio = i * prin;
    console.log(`${operacio}`)
}



//9. Calcular la operación x n sin utilizar la función pow 

var x = 5;
var y = 3; 
var mult = 1;

for (let i = 1; i <= y; i++) { 
    for (let i = x; i <= x; i++) {
        mult = mult * i
    }
}
console.log(mult)   
