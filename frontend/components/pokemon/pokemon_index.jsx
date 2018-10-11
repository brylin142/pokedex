import React from 'react';
import PokemonIndexItem from '../pokemon/pokemon_index_item';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />);
    
    return (
      <section className="pokedex">
        <ul>
          {pokemonItems}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;