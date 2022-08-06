function impresora(){
    console.log('Soy una impresora... Que desea imprimir?');
}

impresora();

//-----------------------------------------------------------
function impresora(parametro){
    console.log(`Imprimiendo...${parametro}`);    
    }
function impresora(){
    console.log(`Imprimiendo...sin parámetro`);    
}
impresora('Amo con locura la programación');

//impresora()
    
function suma(a,b){
    return a+b;
}
    
var rta=suma(10,40);
console.log(rta);
console.log(suma(1,2));
console.log(Math.sqrt(100));
console.log(Math.pow(2,5));
console.log(Math.pow(2,(1/3)));
    

    
//***************************************+ */
//funciones con arreglos
function llenarVector(vector, tam){
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.round(Math.random()*100);    
    }
    return vector;
}
var v=[];
var t=15;
llenarVector(v,t);
console.log(v);
    
function claves(ob){
    var numClaves=0;
    for (const key in ob) {
        numClaves+=1;
    }
    return numClaves;
}

const aprendiz = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion:{ programa: "Prg de software",ficha:2453232, },
};
    
console.log(claves(aprendiz));
    
/**********************************/
    //FUNCIONES FLECHA
    // var suma=function(a,b){return a+b};
    // console.log(suma(1,2))
    
    // const hola=()=>{
    //     console.log('Hola Mundo');
    // } 
const hola=()=>console.log('Hola Mundo');
    hola()
const hola1=parametro=>console.log(`Hola ${parametro}`);
    hola1('SENA');
    // const sumar=(a,b)=>{
    //     return a+b
    // }
const sumar=(a,b)=>a+b
    console.log(sumar(3,5))
    console.log('nueva linea')

//TAREA//
function ecuacionc(a,b,c){
    r1=(b*-1+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
    r2=(b*-1-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)
    console.log(r1);
    console.log(r2);
}
 ecuacionc(1,4,2);


//SUMA Y BUSCAR TAREA:
var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i]
}
console.log(vc,sm);



function vec(vector,tam){
    for (let i = 0; i < tam; i++) {
        vector[i]=Math.round((Math.random())*100);      
    }
    return vector; 
    suma=0
    for (let i = 0; i < vector.length; i++) {
        suma=suma+vector[i];
    }
    return suma
}
var v= vector=[];
var t= 20;
console.log(vec(v,t));


function suma(vector) {
    var suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma=suma+vector[i];
    }
    return suma;
}
var v = vector=[2,5,7,4,3];
console.log(suma(v))
