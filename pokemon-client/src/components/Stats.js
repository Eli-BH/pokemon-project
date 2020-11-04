import React from "react";

const Stats = ({ pokemon }) => {
  return (
    <div>
      <p className="my-3">
        <strong>Type: </strong>
        {pokemon.stats ? pokemon.stats.types[0].type.name : <h5>Loading</h5>}
        {pokemon.stats.types[1]
          ? ` - ${pokemon.stats.types[1].type.name}`
          : null}
      </p>
      <p className="my-3">
        <strong>Id: </strong>
        {pokemon.stats.id}
      </p>
      <p className="my-3">
        <strong>Weight: </strong>
        {pokemon.stats.weight}
      </p>
      <p className="my-3">
        <strong>Height: </strong>
        {pokemon.stats.height}
      </p>
      <p className="my-3">
        <strong>Color: </strong>
        {pokemon.info.color.name}
      </p>
      <p className="my-3">
        <strong>Base Experience: </strong>
        {pokemon.stats.base_experience}
      </p>
      <p className="my-3">
        <strong>Starter Pokémon: </strong>
        {pokemon.stats.is_default ? "True" : "False"}
      </p>
    </div>
  );
};

export default Stats;
