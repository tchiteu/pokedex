import React from 'react';
import useFetch from '../Hooks/useFetch';
import BeautifulTable from '../Components/Tables/BeautifulList';
import Pagination from '../Components/Tables/Pagination';

import './Home.css';

function Home() {
    const { request, loading, error } = useFetch();
    const [pokemonList, setPokemonList] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        async function fetchPokemons() {
            const { json } = await request('https://pokeapi.co/api/v2/pokemon?limit=20');
            setPokemonList(json.results);
            setTotalPages(parseInt((json.count / 20).toFixed()));
        }

        fetchPokemons();
    }, [request]);

    if (pokemonList) {
        return (
            <main>
                <BeautifulTable pokemons={pokemonList} />
                <Pagination currentPage={page} setPage={setPage} totalPages={totalPages} />
            </main>
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
