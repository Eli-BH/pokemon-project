import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

//browser router

import PokemonHomeView from "./views/PokemonHomeView";
import PokeProfileView from "./views/PokeProfileView";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    //pokemon profile component
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PokemonHomeView} />
        <Route path="/pokeprofile/:id" component={PokeProfileView} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
