import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Card.css";

export default function Card({ pokemon }) {
  return (
    <Link to={`/${pokemon.id}`} className="pokemon-card">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
      />
      <h4 className="name">{pokemon.name}</h4>
    </Link>
  );
}

Card.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
