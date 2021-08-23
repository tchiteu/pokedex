import React from "react";
import PokemonCard from "./PokemonCard";

import './BeautifulList.css';

function BeautifulList({ pokemonList }) {
  
    if (pokemonList.length) {
        return (
            <section className="grid-container">
                {pokemonList.map(pokemon => (
                    <div className="item" key={pokemon.name}>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                ))}
            </section>
        )
    }
    else {
        return null;
    }
}

export default BeautifulList;
