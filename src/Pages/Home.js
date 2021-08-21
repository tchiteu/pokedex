import React from 'react';
import useFetch from './Hooks/useFetch';

function Home() {  
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchPokemons() {
      await request('https://pokeapi.co/api/v2/pokemon');
    }

    fetchPokemons();
  }, [request]);

  if (data) {
    return (
      <div>
        {data.results.map(pokemon => (
          <span key={pokemon.name}>
            {pokemon.name}
          </span>
        ))}
      </div>
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