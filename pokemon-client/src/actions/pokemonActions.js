import axios from "axios";

import {
  FETCH_ALL_POKEMON_FAIL,
  FETCH_ALL_POKEMON_REQUEST,
  FETCH_ALL_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_REQUEST,
  FETCH_SINGLE_POKEMON_SUCCESS,
  FETCH_SINGLE_POKEMON_FAIL,
} from "../constants/pokemonConstants";

export const getAllPokemonAction = () => async (dispatch) => {
  try {
    //call the reducer to set loader to wait for response
    dispatch({
      type: FETCH_ALL_POKEMON_REQUEST,
    });

    //call for the data
    const { data } = await axios.get(
      "https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50"
    );

    //the returned info from the data have two keys,
    //name and url,
    //the url has the most pokemon data, we are mapping over that
    //and returning the result

    //map over the original data
    const info = data.results.map(async (item) => {
      //map over the url keys in the orignal data
      const pokemon = await axios.get(item.url);
      //map over the the species data from the url data
      const species = await axios.get(pokemon.data.species.url);
      return { pokemon: pokemon.data, species: species.data };
    });

    //await the map data
    const pokemonInfo = await Promise.all(info);

    //dispatch the returned data
    dispatch({
      type: FETCH_ALL_POKEMON_SUCCESS,
      payload: pokemonInfo,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_POKEMON_FAIL,
      payload: error,
    });
  }
};

export const getSinglePokemonAction = (id) => async (dispatch) => {
  try {
    //request the data for the specified pokemon id
    dispatch({
      type: FETCH_SINGLE_POKEMON_REQUEST,
    });

    const stats = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    const info = await axios.get(stats.data.species.url);

    const locations = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${id}/encounters`
    );

    const fullData = {
      stats: stats.data,
      info: info.data,
      locations: locations.data,
    };
    //wait for all async promises
    dispatch({
      type: FETCH_SINGLE_POKEMON_SUCCESS,
      payload: fullData,
    });
  } catch (error) {
    dispatch({
      type: FETCH_SINGLE_POKEMON_FAIL,
      payload: error,
    });
  }
};
