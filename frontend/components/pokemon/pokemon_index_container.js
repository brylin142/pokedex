import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const msp = state => ({
  pokemon: selectAllPokemon(state)
});

const mdp = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(msp, mdp)(PokemonIndex);