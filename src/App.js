import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonsList from './components/PokemonsList';
import Pokemon from './components/Pokemon';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Connect from './components/Connect';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/connect" component={Connect} />
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
