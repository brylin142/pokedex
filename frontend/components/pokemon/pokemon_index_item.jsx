import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
  <li className='pokemon-index-item'>
    <Link to={`/pokemon/${poke.id}`}>
      <img src={poke.image_url}/>
      <span>{poke.name}</span>
    </Link>
  </li>
);

export default PokemonIndexItem;