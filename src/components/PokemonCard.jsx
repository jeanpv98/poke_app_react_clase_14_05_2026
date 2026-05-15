const PokemonCard = ({ pokemon }) => {

    return (
        <center>
            <div className="">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className=""
                />
                <h2>{pokemon.name}</h2>
                <p>{pokemon.base_experience}</p>
            </div>
        </center>
    )
}
export default PokemonCard;