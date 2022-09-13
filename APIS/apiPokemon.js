import fetch from 'node-fetch';
const URL = 'https://pokeapi.co/api/v2/pokemon'
fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    vec.forEach(element =>{
        console.log(element);
    }
);
})

async function loader(){
    const res = await fetch(URL);
    const data = await res.json();
    console.log('.........................')
    console.log(data)
}

loader();


fetch(URL)
.then(res=>res.json())
.then(data=>{
    let vec=Object.values(data);
    for (let i = 0; i < vec.length; i++) {
        for (let j = 0; j < vec[3].length; j++) {
            console.log("for:", vec[3][j]);   
        }
    }
})
