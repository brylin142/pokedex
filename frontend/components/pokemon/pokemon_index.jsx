import React from 'react';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    
    return (
      <section className="pokedex">
        <ul>
          {pokemon.map(poke =>
            <li>{poke.name} <img src={poke.image_url}/></li>)
          }
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;