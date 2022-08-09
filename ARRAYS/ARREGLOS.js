var vec=[];
//var vec2 = new Array();
console.log(vec);

vec[0] = 100;
console.log(vec); 

vec.push([1,2,3]);
console.log(vec);

//---

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector);


// EJERCICIO SUMA

var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i]
}
console.log( vc, `la suma total del vector es: ${sm}`);


//EJERCIO PROMEDIO 

var vc=[];
for (let i = 0; i < 20 ; i++) {
    vc[i]=Math.round((Math.random())*100);
}
sm=0;
for (let i = 0; i < vc.length; i++) {
    sm= sm+vc[i] 
    prom = sm/20
}
console.log(vc, `la suma es: ${sm}, el promedio es: ${prom}`);


// EJERCICIO VALOR MAXIMO

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
mx=0; 
for (let i = 0; i < vector.length; i++) {
    if (vector[i]>mx) {
        mx=vector[i]
    }
}
console.log(vector, `el valor maximo del vector es: ${mx}`)


// EJERCICIO VALOR MINIMO 

var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i]=Math.round((Math.random())*100);
}
var min = 100; 
for (let i = 0; i < vector.length; i++) {
    if (vector[i] < min) {
        min = vector[i]
    }
}
console.log(vector, `el valor minimo del vector es: ${min}`)



// EJERCICIO MODA 


var vector = [];
for (let i = 0; i < 20; i++) {
    vector[i]=Math.round((Math.random())*100);
}
//----------------------------------------------------------------------
var vector = [2, 9, 6, 3, 5]
console.log(vector);
var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
       for (let j = i+1; j < vector.length ; j++) {
        if (vector[i]> vector[j]) {
            aux=vector[j];
            vector[j]=vector[i];
            vector[i]=aux;
        }
        
       }        
    }
console.log(vector);
contador = 0
for (let i = 0; i < vector.length; i++) {
    if (vector[i] == vector[i] ) {
        contador += 1
    } 
}
if (contador >= 2) {
    console.log(`El vector tiene moda`)
} else {
    console.log(`El vector no tiene moda`)
}



//EJERCICIO MEDIANA 

var vector=[];
for (let i = 0; i < 20 ; i++) {
    vector[i]=Math.round((Math.random())*100);
}
console.log(vector)
var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
       for (let j = i+1; j < vector.length ; j++) {
        if (vector[i] > vector[j]) {
            aux=vector[j];
            vector[j]=vector[i];
            vector[i]=aux;
        }
       }        
    }
console.log(vector);
for (let i = 0; i < vector.length; i++) {
    mdn = vector.length+1
    mediana = mdn/2
    medianaf =  Math.round(mediana)
    posicion = vector[medianaf-1] 
} if (mdn % 2 == 0) {
    console.log(`la mediana es: ${mediana}`)  
    console.log(`la mediana redondeada es: ${medianaf}`) 
    console.log(`la posicion es: ${posicion}`)  
} else {
    p2 = vector[medianaf-2]
    console.log(`la mediana es: ${mediana}`)  
    console.log(`la mediana redondeada es: ${medianaf}`) 
    console.log(`la posicion 1 es: ${posicion}`) 
    console.log(`la posicion 2 es: ${p2}`) 
}

// ORDENAMIENTO POR BURBUJA:

console.log(vector);
var aux=0;
    for (let i = 0; i < vector.length-1; i++) {
       for (let j = i+1; j < vector.length ; j++) {
        if (vector[i]<vector[j]) {
            aux=vector[j];
            vector[j]=vector[i];
            vector[i]=aux;
        }
        
       }        
    }
console.log(vector);


//PARES E IMPARES: 

//--- FINAL

var vector=[];
for (let i = 0; i < 20 ; i++) {
vector[i]=Math.round((Math.random())*100); }

var contp = 0;
var conti = 0;     
console.log(vector);
for (let i = 0; i < vector.length; i++) {
    var par = vector[i] % 2;
    if (par == 0) {
        contp = contp + 1    // var=var+ constante
    } else {
        conti = conti + 1
    }
}
console.log('La cantidad de pares es', contp);
console.log('La cantidad de impares es', conti);



//SUMA DE PARES E IMPARES
var vector=[];
for (let i = 0; i < 20 ; i++) {
vector[i]=Math.round((Math.random())*100); }
var suma = 0; 
var suma1 = 0;    
console.log(vector);
    for (let i = 0; i < vector.length; i++) {
        var par = vector[i] % 2;
            if (par == 0) {
                suma += vector[i]    //var=var+otraVar
            } else {
                suma1 += vector[i]
            }
}
console.log(`La suma de los pares es ${suma}`)
console.log(`La suma de los impares es ${suma1}`)


//PROMEDIO DE PARES E IMPARES 

var vector=[];
for (let i = 0; i < 20 ; i++) {
vector[i]=Math.round((Math.random())*100);
}
[suma, contap] = [0,0]; //declarar varias variables en una línea, usa arreglos
[suma2, contai] = [0,0];
console.log(vector);

    for (let i = 0; i < vector.length; i++) {
        var par = vector[i] % 2;//residuo
        if (par == 0) {
            suma += vector[i] //var=var+otraVar
            contap =contap + 1 // var=var+ constante
            promep = suma / contap 
        } else {
            suma2 += vector[i] //var=var+otraVar
            contai = contai + 1 // var=var+ constante
            promei = suma2 / contai
        }
}
console.log(`La suma de los pares es:  ${suma}`)
console.log('La cantidad de pares es: ', contap);
console.log(`El promedio total de los numeros pares es: ${promep}`)
console.log("-------")
console.log(`La suma de los impares es:  ${suma2}`)
console.log('La cantidad de impares es: ', contai);
console.log(`El promedio total de los numeros pares es: ${promei}`)
