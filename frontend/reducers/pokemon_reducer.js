import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = merge({}, state, action.pokemon);
      return newState;
    case RECEIVE_SINGLE_POKEMON:
      let poke = action.payload.pokemon;
      return merge({}, state, { [poke.id]: poke });
    default:
      return state;
  }
};

export default pokemonReducer;