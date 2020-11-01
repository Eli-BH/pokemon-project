//all pokemon reducers
import {
  FETCH_ALL_POKEMON_REQUEST,
  FETCH_ALL_POKEMON_SUCCESS,
  FETCH_ALL_POKEMON_FAIL,
} from "../constants/pokemonConstants.js";

//reducer for getting all pokemon availible
export const getAllPokemonReducer = (state = { pokemon: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMON_REQUEST:
      return {
        loading: true,
      };
    case FETCH_ALL_POKEMON_SUCCESS:
      return {
        loading: false,
        success: true,
        pokemon: action.payload,
      };
    case FETCH_ALL_POKEMON_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {};
  }
};
