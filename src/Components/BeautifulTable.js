import React from "react";
import useFetch from "../Hooks/useFetch";

function BeautifulTable({ pokemons }) {
    const { request, data: aaii, loading, error } = useFetch();
    const [pokemonList, setPokemonList] = React.useState([]);

    React.useEffect(() => {
        async function fetchPokemonDetails(pokemon) {
            const { json } = await request(pokemon.url);
            
            setPokemonList(pokemonList => [...pokemonList, json]);
        }
        
        pokemons.forEach(pokemon => {
            fetchPokemonDetails(pokemon);
        })
    }, [request, pokemons]);
  
    if (pokemonList.length) {
        return (
            pokemonList.map(pokemon => (
                <span key={pokemon.name}>{pokemon.name}</span>
            ))
        )
    }
    else if (error) {
        return (
            <p>{error}</p>
        );
    }
    else if (loading) {
        return (
            'Carregando...'
        );
    }
    else {
        return null;
    }
}

export default BeautifulTable;