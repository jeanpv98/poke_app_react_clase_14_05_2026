import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemones } from "../service/pokeApp";

const PokemonList = () => {
    const[pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fechData = async () => {
            const data = await getPokemones();
            setPokemones(data)
            setLoading(false)
        }

        fechData()
    }, [])

    if(loading){
        return (
            <div>
                Cargando pokemones...
            </div>    
        )
    }

    return(
        <div>
            {
            pokemones.map((pokemon) => (
                <PokemonCard key = {pokemon.id} pokemon= {pokemon}/>
            ))
            }
        </div>
    )

    
}

export default PokemonList;