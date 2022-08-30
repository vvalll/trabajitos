function rellenar(vector){
    for (let i = 0; i < 18  ; i++) {
        vector[i]=Math.round((Math.random())*100);
    }
    console.log(vector);
}

function promedio(rellenar, vector){
    rellenar(vector);
    suma= 0
    for (let i = 0; i < vector.length;  i++) {
        suma=suma+vector[i];
    }
        promedio=suma/vector.length;
    console.log(`El promedio de los numeros es:${promedio} y la suma total es: ${suma}`);
}

promedio(rellenar, vector = [])

function desviacionEstandar(promedio, rellenar, vector){
    sumaF=0
    for (let i = 0; i < (vector.length); i++) {
        sumaP= Math.pow(promedio(rellenar(vector[i])) - promedio(rellenar(vector)),2);
        sumaF=sumaF+sumaP;
    }
    varianza = Math.sqrt(sumaF / (vector.length) , 2);

    console.log("La desviacion estandar es de: ", varianza)
}

desviacionEstandar(promedio, rellenar, vector =[]); 




