import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange, search }) => (
  <input
    type="text"
    onChange={onChange}
    value={search}
    placeholder="Search Pokémon..."
  />
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default Search;
