import React from 'react';

import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
    const pokemonTypes = pokemon.types.map(type => type.type.name);
    const pokemonMainType = pokemon.types[0]?.type.name || 'unknown';
    const pokemonImage = pokemon.sprites.front_default;
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

    return (
        <div className={`card type-${pokemonMainType}`} >
            <section className="image-box">
                <img src={pokemonImage} alt={pokemon.name} />
            </section>


            <section className="details-box">
                <label className="name">{pokemonName}</label>

                <div className="types">
                    {pokemonTypes.map(type => (
                        <img
                            key={type + pokemon.name}
                            src={`https://veekun.com/dex/media/types/en/${type}.png`}
                            alt={`${type} type`}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default PokemonCard;
