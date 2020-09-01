import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonsList from "./components/PokemonsList";
import Pokemon from "./components/Pokemon";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/:id" component={Pokemon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
