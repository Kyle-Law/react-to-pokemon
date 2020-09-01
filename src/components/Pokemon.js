import React, { useEffect } from "react";
import { fetchPokemon } from "../actions/pokemonActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import "../styles/Pokemon.css";

function Pokemon({ pokemon, match }) {
  // const pokemon = props.pokemon;
  const dispatch = useDispatch();

  useEffect(() => {
    const id = match.params.id;
    dispatch(fetchPokemon(id));
    // eslint-disable-next-line
  }, []);
  console.log(pokemon);
  // console.log(fetchPokemon(id));
  return (
    <div className="pokemon-show">
      <h1>{pokemon.name}</h1>
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <div className="pokemon-stat">
        <h3>
          Height: <span>{`${parseInt(pokemon.height) / 10} m`}</span>
        </h3>
        <h3>Weight: {`${parseInt(pokemon.weight) / 10} kg`}</h3>
        <h3>Abilities: </h3>
        <ul className="pokemon-abilities">
          {pokemon.abilities
            ? pokemon.abilities.map((ab) => (
                <li className="pokemon-ability" key={ab.ability.name}>
                  {ab.ability.name}
                </li>
              ))
            : ""}
        </ul>
        <h3>Type</h3>
        <ul className="pokemon-type">
          {pokemon.types
            ? pokemon.types.map((type) => (
                <li className="pokemon-type" key={type.type.name}>
                  {type.type.name}
                </li>
              ))
            : ""}
        </ul>
      </div>
      <h3 className="pokemon-move-title">Moves</h3>
      <ul className="pokemon-moves-container span 2">
        {pokemon.moves
          ? pokemon.moves.map((move) => (
              <li className="pokemon-move" key={move.move.name}>
                {move.move.name}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({}).isRequired,
  fetchPokemon: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = () => {
  return {
    fetchPokemon,
  };
};

export default connect(mapStateToProp, mapDispatchToProps())(Pokemon);
