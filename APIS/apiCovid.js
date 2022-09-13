import fetch from 'node-fetch';
const URL ='https://api.coronavirus.data.gov.uk/v1/data'

// fetch(URL);
// async function cargar(){
//     const resultado = await fetch(URL);
//     const datos = await resultado.json();
//     console.log(datos)};

// cargar();


fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    for (let i = 0; i < vec.length; i++) {
        var suma = 0;
        var promedio = 0;
        for (let j = 0; j < vec[3].length; j++) {
            console.log("fecha: ", vec[3][j].date, "Cantidad de muertes:", vec[3][j].death);
            suma = suma + vec[3][j].death 
            promedio = suma/vec[3].length
        }
    }
    console.log("Total de fallecidos: ", suma,  "Promedio de muertes: ", promedio)
})