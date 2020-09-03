import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import Search from './Search';
import Filter from './Filter';
import {
  fetchPokemons,
  handleSearch,
  handleFilter,
} from '../actions/pokemonActions';

function PokemonsList({
  pokemons,
  fetchPokemons,
  handleSearch,
  handleFilter,
  search,
  season,
}) {
  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line
  }, []);

  function onChange(e) {
    const input = e.target.value;
    handleSearch(input);
  }

  function onFilter(e) {
    const input = e.target.value;
    handleFilter(input);
  }

  // eslint-disable-next-line max-len
  const filterSearch = (pokemonArray, searchInput) => pokemonArray.filter(p => p.name.includes(searchInput));

  const filterSeason = (array, season) => {
    let newArray;
    if (season === '1') {
      newArray = array.filter(p => p.id <= 151);
    } else if (season === '2') {
      newArray = array.filter(p => p.id > 151 && p.id <= 251);
    } else if (season === '3') {
      newArray = array.filter(p => p.id > 251);
    } else {
      newArray = array;
    }

    return newArray;
  };

  function filtered(pokemonArray, searchInput, season) {
    let newArray;
    newArray = filterSeason(pokemonArray, season);
    newArray = filterSearch(newArray, searchInput);
    return newArray;
  }

  return (
    <div className="pokemons-container">
      <div className="filters-container">
        <Search onChange={onChange} search={search} />
        <Filter onFilter={onFilter} season={season} />
      </div>
      <div className="card-container">
        {pokemons[0] ? (
          filtered(pokemons, search, season).map(pokemon => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(Object).isRequired,
  fetchPokemons: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  search: state.search,
  season: state.season,
});

const mapDispatchToProps = () => ({
  fetchPokemons,
  handleSearch,
  handleFilter,
});

export default connect(mapStateToProps, mapDispatchToProps())(PokemonsList);
