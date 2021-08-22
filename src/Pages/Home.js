import React from 'react';
import useFetch from '../Hooks/useFetch';
import BeautifulTable from '../Components/BeautifulTable';

function Home() {
    const { request, loading, error } = useFetch();
    const [pokemonList, setPokemonList] = React.useState(null);

    React.useEffect(() => {
        async function fetchPokemons() {
            const { json } = await request('https://pokeapi.co/api/v2/pokemon?limit=10');
            setPokemonList(json);
        }

        fetchPokemons();
    }, [request]);

    if (pokemonList) {
        return (
            <BeautifulTable pokemons={pokemonList} />
        );
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

export default Home;
