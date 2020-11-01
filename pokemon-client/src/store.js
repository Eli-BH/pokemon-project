import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllPokemonReducer } from "./reducers/pokemonReducers";

//reducers
const reducer = combineReducers({
  getAllPokemon: getAllPokemonReducer,
});

//initial state
const initialState = {};

//middleware
const middleware = [thunk];

//store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
