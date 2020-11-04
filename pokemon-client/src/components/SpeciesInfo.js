import React from "react";

const SpeciesInfo = ({ pokemon }) => {
  return (
    <div>
      <p className="my-3">
        <strong>Hatch Counter: </strong>
        {pokemon.info.hatch_counter}
      </p>
      <p className="my-3">
        <strong>Baby: </strong>
        {pokemon.stats.is_baby ? "True" : "False"}
      </p>
      <p className="my-3">
        <strong>Legendary: </strong>
        {pokemon.stats.is_legendary ? "True" : "False"}
      </p>

      <p className="my-3">
        <strong>Mythical: </strong>
        {pokemon.stats.is_mythical ? "True" : "False"}
      </p>
      <p className="my-3">
        <strong>Base Happiness:</strong>
        {pokemon.info.base_happiness}
      </p>
      <p className="my-3">
        <strong>Capture Rate:</strong>
        {pokemon.info.capture_rate}
      </p>
      <p className="my-3">
        <strong>Has gender differences:</strong>
        {pokemon.info.has_gender_differences ? " True" : " False"}
      </p>
    </div>
  );
};

export default SpeciesInfo;
