var x=[];//arreglos llaves, Organizado por indices

var objeto={}    
//objeto literal
//organizado por parejas claves:valor;
//Los valores pueden ser de cualquier tipo de dato
//incluso datos compuestos como otros arreglos u objetos
//Operador punto. Sirve para acceder a una clave en particular
const aprendiz = {
  nombre: "Maria",
  documento: 12345,
  competencias: ["diseño", "análisis", "desarrollo"],
  formacion:{ programa: "Prg de software", ficha:2453232, },
};
console.log(aprendiz.documento)
aprendiz.area='software';
console.log(aprendiz.ficha)
aprendiz.nombre='Maria Jose';
console.log(aprendiz)
aprendiz.competencias.push('Deporte');
console.log(aprendiz.competencias);
console.log(aprendiz)
aprendiz.formacion.jornada='diurna';
console.log(aprendiz)
aprendiz.formacion.jornada='mañana';
console.log('objeto original',aprendiz)
var aprendiz2=aprendiz;//recuerden var b=a;
console.log('Objeto copiado',aprendiz2);
//console.log('.....'+aprendiz2.documento);
aprendiz2.sede='Soacha';
console.log('objeto original modif',aprendiz)
console.log('Objeto copiado modif',aprendiz2);


//Crear un objeto literal que tiene como elementos numerador1, 
//numerador2, denominador1, denominador2. Realice las operaciones
//aritméticas básicas entre ellos numerador1 y denominador1 -> un fraccionario
//numerador2 y denominador2 -> otro fraccionario
//ej: 
//2/5
//3/9
//1. 2/5+3/9 
//respuesta en formato numerador/denominador

var fracciones={
    numerador1: 2,
    denominador1: 6,
    numerador2: 3,
    denominador2: 8
}
//SUMA Y RESTA:
    if (fracciones.denominador1 == fracciones.denominador2) {
        //suma:
        sumanm= fracciones.numerador1+fracciones.numerador2
        console.log(`La suma es: ${sumanm}/${fracciones.denominador1}`)
        //resta:
        restanm= fracciones.numerador1-fracciones.numerador2
        console.log(`La resta es: ${restanm}/${fracciones.denominador1}`)
    } else {
        //suma:
        multi1= fracciones.numerador1*fracciones.denominador2
        multi2=fracciones.denominador1*fracciones.numerador2
        denom=fracciones.denominador1*fracciones.denominador2
        numerad=multi1+multi2
        console.log(`La suma es: ${numerad}/${denom}`)
        //resta:
        numera= multi1-multi2
        console.log(`La resta es: ${numera}/${denom}`)
    }

//MULTIPLICACION: 

nume1 = fracciones.numerador1*fracciones.numerador2
deno1 = fracciones.denominador1*fracciones.denominador2
console.log(`La multiplicacion es: ${nume1}/${deno1}`)

//DIVISION: 

nume2 = fracciones.numerador1*fracciones.denominador2
deno2 = fracciones.denominador1*fracciones.numerador2
console.log(`La division es: ${nume2}/${deno2}`)

