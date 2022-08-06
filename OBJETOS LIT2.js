var coleccion=[
    {nombre:'Cien años de soledad', autor:'Gabriel Garcia Marquez', obras:["El amor en tiempos del colera (1985)","Cronica de una muerte anunciada (1981)","El coronel no tiene quien le escriba (1961)"]},
    {nombre:'Pedro Paramo', autor:'Juan Rulfo', obras:["Diles que no me maten! (1953)", "El gallo de oro (1980)", "El llano en llamas (1953)"]},
    {nombre:'Siervo sin Tierra', autor:'Eduardo Caballero Calderon', obras:["Historia en cuentos (1953)", "El buen salvaje (1966)", "El arte de vivir sin soñar"]},
]

console.log(coleccion[1].obras[2])

coleccion.forEach(function(n){
    console.log(n)
})


coleccion.forEach(function(e){
    console.log(e.obras[e.obras.length-1]);
})


//------------------------------------

var numeros=[];
for (let i = 0; i < 10; i++) {
    numeros.push(Math.round(Math.random()*100));
}
console.log(numeros);

numeros.forEach(function(n){
console.log(n+n);
})



