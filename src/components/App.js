import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import Pokemon from './Pokemon';
import NavBar from './NavBar';
import Footer from './Footer';
import About from './About';
import Connect from './Connect';
import NotFound from './NotFound';

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
