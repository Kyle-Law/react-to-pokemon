import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "./Card";
import Search from "./Search";
import Filter from "./Filter";
import {
  fetchPokemons,
  handleSearch,
  handleFilter,
} from "../actions/pokemonActions";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange(e) {
    const input = e.target.value;
    handleSearch(input);
  }

  function onFilter(e) {
    const input = e.target.value;
    console.log(input);
    handleFilter(input);
  }

  const filterSearch = (pokemonArray, searchInput) =>
    pokemonArray.filter((p) => p.name.includes(searchInput));

  const filterSeason = (array, season) => {
    if (season === "1") {
      array = array.filter((p) => p.id <= 151);
    }
    if (season === "2") {
      array = array.filter((p) => p.id > 151 && p.id <= 251);
    }
    if (season === "3") {
      array = array.filter((p) => p.id > 251);
    }

    return array;
  };

  function filtered(pokemonArray, searchInput, season) {
    pokemonArray = filterSeason(pokemonArray, season);
    pokemonArray = filterSearch(pokemonArray, searchInput);
    return pokemonArray;
  }

  return (
    <div className="pokemons-container">
      <div className="filters-container">
        <Search onChange={onChange} search={search} />
        <Filter onFilter={onFilter} season={season} />
      </div>
      <div className="card-container">
        {filtered(pokemons, search, season).map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

PokemonsList.propTypes = {
  pokemons: PropTypes.array.isRequired,
  fetchPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
  search: state.search,
  season: state.season,
});

const mapDispatchToProps = () => {
  return {
    fetchPokemons,
    handleSearch,
    handleFilter,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PokemonsList);
