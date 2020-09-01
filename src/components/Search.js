import React from "react";

const Search = ({ onChange, search }) => (
  <input
    type="text"
    onChange={onChange}
    value={search}
    placeholder="Search Pokemon..."
    autoFocus
  />
);

export default Search;
