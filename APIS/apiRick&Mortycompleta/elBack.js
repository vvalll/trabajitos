import fetch from 'node-fetch';
const URL = 'https://rickandmortyapi.com/api/character'

async function reload(){
    const res=await fetch(URL);
    const data=await res.json();
    let vec=Object.values(data);
        for (let j = 0; j < vec[1].length; j++) {
            console.log(vec[1][j].name);
            console.log(vec[1][j].image);
        }   
}
    
reload()
