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


//-----------------------------------

//this significa éste(a) o el(la) presente = (objeto, clase o función)
const aprendiz1 = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  
  const aprendiz2 = {
    nombre: "Pedro",
    documento: 54321,
    competencias: ["diseño", "análisis", "desarrollo","ética"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  console.log(aprendiz2.datosPersonales());
  
  //Datos primitivos o simples
  // let a;
  // a=1;
  // a='sena'
  // a=4.2;


