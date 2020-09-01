import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="ui raised very padded segment">
      <Link to="/" className="ui teal inverted segment">
        React to Pokémon
      </Link>
      <div className="ui right floated header">
        <button className="ui button">
          <NavLink exact to="/">
            Home
          </NavLink>
        </button>
        <button className="ui button">
          <NavLink exact to="/about">
            About
          </NavLink>
        </button>
        <button className="ui button">
          <NavLink exact to="/connect">
            Connect
          </NavLink>
        </button>
      </div>
    </nav>
  );
}
