const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=150"

export const getPokemones = async () => {

    try {
        const response = await fetch (API_URL);
        const data = response.json();

        const pokemonDetails = Promise.all(
            data.results.map(async (pokemon)=>{
                const res = await pokemon.url 
                re

            }) 
        )
    
    }catch(error){
        console.log(error);
    }



}