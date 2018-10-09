import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState; window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<h1>Pokedex</h1>, root);
});