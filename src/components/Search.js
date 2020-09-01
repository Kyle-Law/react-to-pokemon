import React from "react";
import { connect } from "react-redux";

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
