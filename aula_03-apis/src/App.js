import React, { useEffect, useState } from 'react';
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  function loadAPI() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charizard';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      console.log(json)
      setPokemon(json)
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>Pokemon API</strong>
      </header>

      <div>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <div>Nome: {pokemon.name}</div>
        <div>Nº {pokemon.id}</div>
        <div>Peso: {pokemon.weight}</div>
        <div>Altura: {pokemon.height}</div>
      </div>
    </div>
  );
}

export default App;
