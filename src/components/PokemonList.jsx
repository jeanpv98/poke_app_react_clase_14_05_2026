import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemones } from "../service/pokeApp";

const PokemonList = () => {
    const [pokemones, setPokemones] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [searchExp, setSearchExp] = useState("")

    const filtrarpokemones = pokemones.filter((pokemon) =>
        pokemon.name
            .toLowerCase()
            .includes(search.toLowerCase()) &&
        pokemon.base_experience
            .toString()
            .includes(searchExp)
    )
    useEffect(() => {
        const fechData = async () => {
            const data = await getPokemones();
            setPokemones(data)
            setLoading(false)
        }

        fechData()
    }, [])

    if (loading) {
        return (
            <div className='text-center text-2x1 mt-10'>
                Cargando pokemones...
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <input
                    placeholder='Buscar pokemon por nombre ...'
                    onChange={(e) => setSearch(e.target.value)}
                    className=''
                />
                <input
                    placeholder='Buscar pokemon por base de experiencia ...'
                    onChange={(e) => setSearchExp(e.target.value)}
                    className=''
                />
            </div>
            <div>
                {filtrarpokemones.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
                }
            </div>
        </div>
    )


}

export default PokemonList;