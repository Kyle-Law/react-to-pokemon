import React from "react";

const Search = ({ onChange, search }) => (
  <input
    type="text"
    onChange={onChange}
    value={search}
    placeholder="Search Pokémon..."
    autoFocus
  />
);

export default Search;
