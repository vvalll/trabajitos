//2. Escribe un programa que pida tres números y que escriba si son los tres
// iguales, si hay dos iguales o si son los tres distintos.

var a = Math.round(Math.random()*100);
var b = Math.round(Math.random()*100);
var c = Math.round(Math.random()*100);

if (a==b && a==c && b==c) {
    console.log("Los tres numeros son iguales ") 
} else if (a==b ||  b==c || a==c ) {
    console.log("Dos numeros son iguales ")
} else if (a!=b && a!=c && b!=c) {
    console.log("Los tres numeros son distintos ")
}


//5. En un juego de preguntas a las que se responde “Si” o “No” gana quien
//responda correctamente las tres preguntas. Si se responde mal a cualquiera de
//ellas ya no se pregunta la siguiente y termina el juego

var a= "¿Colon descubrio America?";
var b= "¿La independencia de Colombia fue en el año 1810?"
var c= "¿The Doors fue un grupo de rock Americano?"
var s= "Si"
var n= "No"

a=s
b=s
c=s

if (a==s && b==s && c==s) {
    console.log("Respuestas correctas, Ganaste el juego")
} else if (a==n || b==n || c==n) {
    console.log("Game Over")
}


//7. Un obrero necesita calcular su salario semanal
a = 50;
salario = a * 2600;
salariof = a - 40;
salario2 = 104000 + (salariof * 5000)
if (a <= 40) {
    console.log(`Se le paga ${salario} por las ${a} horas`)
} else if (a > 40) {
    console.log(`Se le paga ${salario2} por las ${a} horas`)
}


// 8. Telefónica realiza los cálculos del costo de una llamada de teléfono: 

a = 5;
pre1 = 200;
mayor = a - 3;
pre2 = 200 + (mayor * 50)
if (a <= 3) {
    console.log(`Su llamada duro ${a} min, el costo es ${pre1}`)
} else if (a > 3) {
    console.log(`Su llamada duro ${a} min, el costo es ${pre2}`)
}


//9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
//ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
//posterior

const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();
var d = (6);
var m = (6);
var a = (2022);

var x= dia - d; 
var v = mes - m;  
var j = año - a; 

if (x<0 && v<0 && j<0) {
    var y = Math.abs(x);
    var w = Math.abs(v);
    var l = Math.abs(j);
    console.log(`Han transcurrido ${y} dias, ${w} meses y ${l} años de la fecha actual`)
} else if (x>0 && v>0 && j>0) {
    console.log(`Faltan ${x} dias, ${v} meses y ${j} años, para llegar a la fecha actual`)
} else if (x==0 && v==0 && j==0) {
    console.log(`Es la fecha actual tambien`)
} else if (x<0 || v<0 && j<0) {
    var d = Math.abs(x);
    var e = Math.abs(v);
    var f = Math.abs(j);
    console.log(`Ha transcurrido ${f} años y falta ${d} dias y ${e} meses de la fecha actual`)
} else if (x>0 || v>0 && j>0) {
    var g = Math.abs(x);
    var h = Math.abs(v);
    var i = Math.abs(j);
    console.log(`Falta ${i} años y ha transcurrido ${g} dias, ${h} meses de la fecha actual`)
}


//3. Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
//exceda los límites emita un mensaje y finalice el programa

var nm = 2.44;
nm.toString().length;
var final= nm.toString().length - 1;
if (final < 5) {
    console.log(`El numero: ${nm}, tiene ${final} cifras`)
} else {
    console.log("Lo sentimos, tu numero excede los limites, adios.")
}


//6. Pida un numero al usuario que representa días del año. Diga a que mes del año
//corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
//Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
//cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.

var day=284;
if (day >= 1 && day <= 31) {
    console.log("Tu numero corresponde al mes de ENERO!")
} else if (day >= 32 && day <= 59) {
    console.log("Tu numero corresponde al mes de FEBRERO!")
} else if (day >= 60 && day <= 90) {
    console.log("Tu numero corresponde al mes de MARZO!")
} else if (day >= 91 && day <= 120) {
    console.log("Tu numero corresponde al mes de ABRIL!")
} else if (day >= 121 && day <= 151) {
    console.log("Tu numero corresponde al mes de MAYO!")
} else if (day >= 152 && day <= 181) {
    console.log("Tu numero corresponde al mes de JUNIO!")
} else if (day >= 182 && day <= 212) {
    console.log("Tu numero corresponde al mes de JULIO!")
} else if (day >= 213 && day <= 243) {
    console.log("Tu numero corresponde al mes de AGOSTO!")
} else if (day >= 244 && day <= 274) {
    console.log("Tu numero corresponde al mes de SEPTIEMBRE!")
} else if (day >= 275 && day <= 305) {
    console.log("Tu numero corresponde al mes de OCTUBRE!")
} else if (day >= 306 && day <= 335) {
    console.log("Tu numero corresponde al mes de NOVIEMBRE!")
} else if (day >= 336 && day <= 366) {
    console.log("Tu numero corresponde al mes de DICIEMBRE!")
} else {
    console.log("Lo sentimos tu numero excedio el limite y no corresponde")
} { 
} { 
} { 
} { 
} { 
} { 
} { 
} { 
} { 
} { 
}{   
}


//10. Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
//programa debe responder que hora será un segundo después. Ej: ingreso
//11:59:59, el programa responde 12:00:00. 

var hr= 14
var mn= 59
var sg= 58

var sumasg = sg + 1
var sumamn = mn + 1
var sumahr = hr + 1

if (sumasg == 60 && sumamn == 60) {
    console.log(`${sumahr}:00:00`)
} else if (sumasg == 60) {
    console.log(`${hr}:${sumamn}:00`)
} else if (sumamn == 60) {
    console.log(`${hr}:${sumamn}:${sumasg}`)
} else {
    console.log(`${hr}:${mn}:${sumasg}`) 
}

//14. Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga
//además en que vuelta está sabiendo que cada 360 grados se completa una
//vuelta a la circunferencia. Además diga el resultado en radianes.

var grados = 180;

if (grados >= 0 && grados <= 90) {
    console.log(`${grados} es del cuadrante I`)
} else if (grados >= 91 && grados <= 180) {
    console.log(`${grados} es del cuadrante II`)
} else if (grados >= 181 && grados <= 270) {
    console.log(`${grados} es del cuadrante III`)
} else if (grados >= 271 && grados <= 360) {
    console.log(`${grados} es del cuadrante IV`)
} else {  
    var vueltas = grados / 360;
    var vueltent = Math.round(vueltas);
    console.log(`Ha completado ${vueltent} vueltas a la circunferencia`)
} {
} { 
} { 
}

var π = 3.141592;
var conversion = grados * π/180;

console.log(`El ${grados} a radianes es: ${conversion}`)