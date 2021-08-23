import React from "react";
import useFetch from "../../Hooks/useFetch";
import PokemonCard from "./PokemonCard";

import './BeautifulList.css';

function BeautifulList({ pokemons }) {
    const { request, loading, error } = useFetch();
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
            <section className="container">
                {pokemonList.map(pokemon => (
                    <div className="item" key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                ))}
            </section>
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

export default BeautifulList;
