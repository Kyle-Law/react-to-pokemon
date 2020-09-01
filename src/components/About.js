import React from "react";

export default function About() {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">About</h3>
      <p>
        A simple pokémon catelogue built by React & Redux with PokeAPI
        <br></br>
        User can search or filter pokémon based on season (only 3 seasons are
        included)
      </p>
    </div>
  );
}
