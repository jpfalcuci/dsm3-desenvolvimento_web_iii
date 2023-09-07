// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState('');

  function loadAPI(name) {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPokemon(json);
      })
      .catch((error) => console.log(error));
  }

  // useEffect(() => {
  //   loadAPI('');
  // }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    loadAPI(pokemonName.toLowerCase());
  };

  return (
    <div className='container'>
      <header>
        <strong>Pokemon API</strong>
      </header>

      <form onSubmit={handleFormSubmit}>
        <label>
          <input type='text' placeholder='Digite o nome de um pokemon'
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          />
        </label>
        <button type='submit'>Buscar</button>
      </form>

      <div>
        {pokemon && (
          <>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div>Nome: {pokemon.name}</div>
            <div>Nº {pokemon.id}</div>
            <div>Peso: {pokemon.weight}</div>
            <div>Altura: {pokemon.height}</div>
            <div>Tipo: {pokemon.types?.map((type) => type.type.name).join(', ')}</div>
            <div>Habilidades: {pokemon.abilities?.map((ability) => ability.ability.name).join(', ')}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
