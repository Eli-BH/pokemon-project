import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//browser router

import PokemonHomeView from "./views/PokemonHomeView";
import PokeProfileView from "./views/PokeProfileView";
import Navbar from "./components/NavBar";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

const App = () => {
  return (
    //pokemon profile component
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={PokemonHomeView} />
        <Route path="/pokeprofile/:id" component={PokeProfileView} />
        <Route path="/login" component={LoginView} />
        <Route path="/register" component={RegisterView} />
      </Switch>
    </Router>
  );
};

export default App;
