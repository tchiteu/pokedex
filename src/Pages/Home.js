import React from 'react';
import useFetch from '../Hooks/useFetch';
import BeautifulList from '../Components/List/BeautifulList';
import Pagination from '../Components/List/Pagination';
import Loading from '../Components/Helpers/Loading';

import './Home.css';

function Home() {
    const { request, error } = useFetch();
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [pokemonList, setPokemonList] = React.useState([]);

    React.useEffect(() => {
        setPokemonList([]);

        async function fetchPokemons() {
            setLoading(true);

            let pokemons = [];
            let pokemonsWithDetails = [];
            
            const nextOffset = 20 * (page - 1);
            
            // Fetch Pokemons without details
            const { json } = await request(`https://pokeapi.co/api/v2/pokemon?offset=${nextOffset}&limit=20`);
            pokemons = json.results;
            setTotalPages(parseInt((json.count / 20).toFixed()));

            // Fetch Pokemons with datails
            let promises = [];
            pokemons.forEach(pokemon => {
                const promise = request(pokemon.url);
                promises.push(promise);
            })

            const responses = await Promise.all(promises);
            pokemonsWithDetails = responses.map(res => res.json);

            // Order and set PokemonList
            setPokemonList(pokemonsWithDetails.sort((a, b) => a.order < b.order && -1));

            setLoading(false);
        }

        fetchPokemons();
    }, [request, page]);
    
    if (pokemonList.length) {
        return (
            <main>
                <BeautifulList pokemonList={pokemonList} />
                <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
            </main>
        );
    }
    else if (loading) {
        return (
            <Loading />
        );
    }
    else if (error) {
        return (
            <p>{error}</p>
        );
    }
    else {
        return null;
    }
}

export default Home;
