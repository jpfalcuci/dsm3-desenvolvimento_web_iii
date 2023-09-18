import React, { useEffect, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  useEffect(() => {
    loadAPI('pikachu');
  }, []);

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
      <div className="input-group mb-3">
          <input
            type='text'
            className='form-control'
            placeholder='Digite o nome de um Pokémon'
            style={{ width: '300px' }}
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
          />
          <div className="input-group-append">
            <button type='submit' className='btn btn-primary'>Buscar</button>
          </div>
        </div>
      </form>

      <div>
        {pokemon && (
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Imagem</th>
                <td>
                  <img src={pokemon.sprites?.front_default} alt={pokemon.name} className="img-fluid" />
                </td>
              </tr>
              <tr>
                <th scope="row">Nome</th>
                <td>{pokemon.name}</td>
              </tr>
              <tr>
                <th scope="row">Nº</th>
                <td>{pokemon.id}</td>
              </tr>
              <tr>
                <th scope="row">Peso</th>
                <td>{pokemon.weight}</td>
              </tr>
              <tr>
                <th scope="row">Altura</th>
                <td>{pokemon.height}</td>
              </tr>
              <tr>
                <th scope="row">Tipo</th>
                <td>{pokemon.types?.map((type) => type.type.name).join(', ')}</td>
              </tr>
              <tr>
                <th scope="row">Habilidades</th>
                <td>{pokemon.abilities?.map((ability) => ability.ability.name).join(', ')}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
