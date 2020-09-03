import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import { fetchPokemon } from '../actions/pokemonActions';
import '../styles/Pokemon.css';

function Pokemon({ pokemon, match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = match.params;
    dispatch(fetchPokemon(id));
    // eslint-disable-next-line
  }, []);
  return (
    <div className="pokemon-show">
      <h1>{pokemon.name}</h1>
      {pokemon.id && (
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
      )}
      <div className="pokemon-stat">
        <h3>
          Height:
          {' '}
          <span>{`${parseInt(pokemon.height, 10) / 10} m`}</span>
        </h3>
        <h3>
          Weight:
          {`${parseInt(pokemon.weight, 10) / 10} kg`}
        </h3>
        <h3>Abilities: </h3>
        <ul className="pokemon-abilities">
          {pokemon.abilities
            ? pokemon.abilities.map(ab => (
              <li className="pokemon-ability" key={ab.ability.name}>
                {ab.ability.name}
              </li>
            ))
            : ''}
        </ul>
        <h3>Type</h3>
        <ul className="pokemon-type">
          {pokemon.types
            ? pokemon.types.map(type => (
              <li className="pokemon-type" key={type.type.name}>
                {type.type.name}
              </li>
            ))
            : ''}
        </ul>
      </div>
      <h3 className="pokemon-move-title">Moves</h3>
      <ul className="pokemon-moves-container span 2">
        {pokemon.moves
          ? pokemon.moves.map(move => (
            <li className="pokemon-move" key={move.move.name}>
              {move.move.name}
            </li>
          ))
          : ''}
      </ul>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    abilities: PropTypes.arrayOf(Object),
    moves: PropTypes.arrayOf(Object),
    species: PropTypes.shape({}),
    stats: PropTypes.arrayOf(Object),
    types: PropTypes.arrayOf(Object),
    weight: PropTypes.number,
    height: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProp = state => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = () => ({
  fetchPokemon,
});

export default connect(mapStateToProp, mapDispatchToProps())(Pokemon);
