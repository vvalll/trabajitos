// FUNCIONES CONDICIONALES CLASICAS Y FLECHA: 


// 1:

// (2. Escribe un programa que pida tres números y que escriba si son los tres
// iguales, si hay dos iguales o si son los tres distintos.)

function comparar(a,b,c){
    console.log(a,b,c)
    if (a==b && a==c && b==c) {
        console.log("Los tres numeros son iguales ") 
    } else if (a==b ||  b==c || a==c ) {
        console.log("Dos numeros son iguales ")
    } else if (a!=b && a!=c && b!=c) {
        console.log("Los tres numeros son distintos ")
    }
}
comparar(Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100))


//-------------------------------- FLECHA: 

var comparando = (a,b,c)=> {
    if (a==b && a==c && b==c) {
        console.log("Los tres numeros son iguales ") 
    } else if (a==b ||  b==c || a==c ) {
        console.log("Dos numeros son iguales ")
    } else if (a!=b && a!=c && b!=c) {
        console.log("Los tres numeros son distintos ")
    }
    console.log(a,b,c)
}
comparando(Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100))

//2:

//(5. En un juego de preguntas a las que se responde “Si” o “No” gana quien
//responda correctamente las tres preguntas. Si se responde mal a cualquiera de
//ellas ya no se pregunta la siguiente y termina el juego)

function preguntas(_r1,_r2,_r3){
    console.log(`Responde con "SI" o "NO" a cada una de las preguntas:  \n 1."¿Colon descubrio America?" \n 2."¿La independencia de Colombia fue en el año 1810?" \n 3."¿The Doors fue un grupo de rock Americano?"`)
    var s = "SI";
    var n = "NO";
    if (_r1 == s && _r2 == s && _r3 == s) {
        console.log("Respuestas correctas, Ganaste el juego")
    } else if (_r1 == n || _r2 == n || _r3 == n) {
        console.log("Game Over") 
    }
}
preguntas("SI", "SI", "NO")


//-------------------------------- FLECHA: 

var juego = (_r1,_r2,_r3)=> {var s = "SI"; var n = "NO";
if (_r1 == s && _r2 == s && _r3 == s) {
    console.log("Respuestas correctas, Ganaste el juego")
} else if (_r1 == n || _r2 == n || _r3 == n) {
    console.log("Game Over") 
}
}
console.log(`Responde con "SI" o "NO" a cada una de las preguntas:  \n 1."¿Colon descubrio America?" \n 2."¿La independencia de Colombia fue en el año 1810?" \n 3."¿The Doors fue un grupo de rock Americano?"`)
juego("SI","NO","SI")



//3: 

//(7. Un obrero necesita calcular su salario semanal): Si trabaja 40 horas 
//o menos se le paga $2600 por hora, Si trabaja más de 40 horas se le paga
// $2600 por cada una de las primeras 40 horas y $5000 por cada hora extra

function salario(_horas){
    semanal = _horas * 2600;
    final = _horas - 40;
    semanal2  = 104000 + (final * 5000);
    if (_horas <= 40) {
        console.log(`Se le paga ${semanal} por las ${_horas} horas`)
    } else if (_horas > 40) {
        console.log(`Se le paga ${semanal2} por las ${_horas} horas`)
    }
}
salario(Math.round(Math.random()*100));


//-------------------------------- FLECHA: 

var calculo = _horas => { semanal = _horas * 2600; final = _horas - 40; semanal2  = 104000 + (final * 5000);
    if (_horas <= 40) {
        console.log(`Se le paga ${semanal} por las ${_horas} horas`)
    } else if (_horas > 40) {
        console.log(`Se le paga ${semanal2} por las ${_horas} horas`)
    }
}
calculo(Math.round(Math.random()*100))


//4: 

//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
//programa debe responder que hora será un segundo después. Ej: ingreso
//11:59:59, el programa responde 12:00:00. 


function reloj(_hora,_minuto,_segundo){
    sumahr = _hora + 1;
    sumamn = _minuto + 1;
    sumasg = _segundo + 1;
    console.log(_hora,_minuto,_segundo)
    if (sumasg == 60 && sumamn == 60) {
        console.log(`${sumahr}:00:00`)
    } else if (sumasg == 60) {
        console.log(`${_hora}:${sumamn}:00`)
    } else if (sumamn == 60) {
        console.log(`${_hora}:${sumamn}:${sumasg}`)
    } else {
        console.log(`${_hora}:${_minuto}:${sumasg}`)
    } {    
    }
}
reloj(Math.round(Math.random()*24),Math.round(Math.random()*60),Math.round(Math.random()*60))


//-------------------------------- FLECHA: 

var horario = (_hora,_minuto,_segundo) => {sumahr = _hora + 1; sumamn = _minuto + 1; sumasg = _segundo + 1; console.log(_hora,_minuto,_segundo)
    if (sumasg == 60 && sumamn == 60) {
        console.log(`${sumahr}:00:00`)
    } else if (sumasg == 60) {
        console.log(`${_hora}:${sumamn}:00`)
    } else if (sumamn == 60) {
        console.log(`${_hora}:${sumamn}:${sumasg}`)
    } else {
        console.log(`${_hora}:${_minuto}:${sumasg}`)
    } {    
    }
}
horario(Math.round(Math.random()*24),Math.round(Math.random()*60),Math.round(Math.random()*60))


//5: 

//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga
//además en que vuelta está sabiendo que cada 360 grados se completa una
//vuelta a la circunferencia. Además diga el resultado en radianes.

function trigonometria(_grados){
    if (_grados >= 0 && _grados <= 90) {
        console.log(`${_grados} es del cuadrante I`)
    } else if (_grados >= 91 && _grados <= 180) {
        console.log(`${_grados} es del cuadrante II`)
    } else if (_grados >= 181 && _grados <= 270) {
        console.log(`${_grados} es del cuadrante III`)
    } else if (_grados >= 271 && _grados <= 360) {
        console.log(`${_grados} es del cuadrante IV`)
    } else {
        var vueltas = _grados / 360;
        var vueltaent = Math.round(vueltas);
        console.log(`Ha completado ${vueltaent} vuelta(s) a la circunferencia`)
    } {   
    } { 
    } { 
    }
    var π = 3.141592;
    var conversion = _grados * π/180;
    console.log(`El ${_grados} a radianes es: ${conversion}`)
}

trigonometria(Math.round(Math.random()*1000))


//-------------------------------- FLECHA: 

var ang_rad = _grados => {var π = 3.141592; var conversion = _grados * π/180; console.log(`El ${_grados} a radianes es: ${conversion}`)
    if (_grados >= 0 && _grados <= 90) {
        console.log(`${_grados} es del cuadrante I`)
    } else if (_grados >= 91 && _grados <= 180) {
        console.log(`${_grados} es del cuadrante II`)
    } else if (_grados >= 181 && _grados <= 270) {
        console.log(`${_grados} es del cuadrante III`)
    } else if (_grados >= 271 && _grados <= 360) {
        console.log(`${_grados} es del cuadrante IV`)
    } else {
        var vueltas = _grados / 360;
        var vueltaent = Math.round(vueltas);
        console.log(`Ha completado ${vueltaent} vuelta(s) a la circunferencia`)
    } {   
    } { 
    } { 
    }
}
ang_rad(Math.round(Math.random()*1000))


// FUNCIONES CICLOS CLASICAS: 

//1:

//(1. Determinar los divisores de un número introducido por teclado)

function divisores(_numero, _final){
    contador = 0 
    while (contador < _final) {
        ++contador
        var divisor = _numero % contador;
        if (divisor == 0) {
            console.log(`${contador} es divisor de ${_numero}`)
        } else {
            console.log(`${contador} no es divisor de ${_numero}`)
        }
    }
}
divisores(Math.round(Math.random()*100), Math.round(Math.random()*50))


//-------------------------------- FLECHA: 

var divisible = (_numero, _final) => {contador = 0; 
    while (contador < _final) {++contador; var divisor = _numero % contador;
        if (divisor == 0) {
            console.log(`${contador} es divisor de ${_numero}`)
        } else {
            console.log(`${contador} no es divisor de ${_numero}`)
        }
    }
}
divisible(Math.round(Math.random()*100), Math.round(Math.random()*50))


//2: 

//(2. Determinar si un numero es o no es primo)

function primos(_num){
    var det = 1; 
    for (let i = 2; i < _num; i++) {
        if (_num % i == 0) {
            det = 2
        }
    }
    if (det == 1) {
        console.log(`${_num} es primo`)
    } else if (det == 2) {
        console.log(`${_num} no es primo`)
    }
}
primos(Math.round(Math.random()*100))


//-------------------------------- FLECHA: 

var numprimos = _num => {var det = 1;
    for (let i = 2; i < _num; i++) {
        if (_num % i == 0) {
            det = 2
        }
    }
    if (det == 1) {
        console.log(`${_num} es primo`)
    } else if (det == 2) {
        console.log(`${_num} no es primo`)
    }
}
numprimos(Math.round(Math.random()*100))


//3: 

//(12. Escribir un programa que visualice la siguiente figura,
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


function figura(_lineas){
    var fg = "* "
    console.log(fg)
    for (let i = 0; i < _lineas ; i++) {
        for (let i = 0; i < _lineas ; i++) {
            i = "* "
            fg += i
            console.log(fg) 
        }
    }
}
figura(Math.round(Math.random()*25))


//-------------------------------- FLECHA: 

var fig = _lineas => {var simbolo = "* "; console.log(simbolo)
    for (let i = 0; i < _lineas ; i++) {
        for (let i = 0; i < _lineas ; i++) {
            i = "* "
            simbolo += i
            console.log(simbolo) 
        }
    }
}
fig(Math.round(Math.random()*25))


//4: 


//(8. Determinar cuales son los múltiplos de 5 comprendidos entre
//1 y N.)

function multiplos(_number){
    console.log(`Los multiplos del numero 5 comprendidos entre 1 y ${_number} son: `)
    for (let i = 1; i <= _number; i++) {
        operacion = i * 5;
        console.log(`${operacion}`)
    }
}
multiplos(Math.round(Math.random()*100))


//-------------------------------- FLECHA:

var multiplo = _number => {console.log(`Los multiplos del numero 5 comprendidos entre 1 y ${_number} son: `); 
    for (let i = 1; i <= _number; i++) {
        operacion = i * 5;
        console.log(`${operacion}`)
    } 
}
multiplo(Math.round(Math.random()*50))


//5:


//(//9. Calcular la operación x n sin utilizar la función pow)

function potencia(_base, _exponente){
    console.log(`Base: ${_base}, Exponente: ${_exponente}`)
    mult = 1; 
    for (let i = 1; i <= _exponente ; i++) { 
        for (let i = _base; i <= _base; i++) {
            mult = mult * i
        }
    }
    console.log(mult) 
}
potencia(Math.round(Math.random()*10),Math.round(Math.random()*10))


//-------------------------------- FLECHA:

var elevar = (_base, _exponente) => {console.log(`Base: ${_base}, Exponente: ${_exponente}`);mult = 1; 
    for (let i = 1; i <= _exponente ; i++) { 
        for (let i = _base; i <= _base; i++) {
            mult = mult * i
        }
    }
    console.log(mult)    
}
elevar(Math.round(Math.random()*10), Math.round(Math.random()*10))






// MEDIANA FUNCIONES 

//CLASICA: 


 