import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//pokemon reducers
import {
  getAllPokemonReducer,
  getSinglePokemonReducer,
} from "./reducers/pokemonReducers";

//user reducers
import {
  userRegisterReducer,
  userLoginReducer,
  userDetailsReducer,
  userAddPokemonReducer,
} from "./reducers/userReducers";

//reducers
const reducer = combineReducers({
  getAllPokemon: getAllPokemonReducer,
  getSinglePokemon: getSinglePokemonReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userAddPokemon: userAddPokemonReducer,
});

//check if there is information in the local storage
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

//initial state
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

//middleware
const middleware = [thunk];

//store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
