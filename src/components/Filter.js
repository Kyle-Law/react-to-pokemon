import React from "react";
import PropTypes from "prop-types";
import seasons from "../constants/seasons";

const Filter = ({ onFilter, season }) => (
  <select name="season" onChange={onFilter} value={season}>
    <option disabled value="Select Season">
      Select Season
    </option>
    <option value="All">All</option>
    {seasons.map((s) => (
      <option key={s.season} value={s.season}>
        {s.season}
      </option>
    ))}
  </select>
);

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
