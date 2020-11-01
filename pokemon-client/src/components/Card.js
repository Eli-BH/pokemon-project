import React from "react";
import "../styles/largeCardStyle.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-face">
        <div className="card-content">
          <div className="card-header">
            <h2 className="poke-name">
              {item.pokemon.name.charAt(0).toUpperCase() +
                item.pokemon.name.slice(1)}
            </h2>
          </div>

          <div className="card-img-container">
            <img
              src={item.pokemon.sprites.front_default}
              alt={item.pokemon.name}
              className="pokemon-sprite"
            />
            <div className="poke-measure">
              <p className="poke-height">
                Height: {Math.floor(item.pokemon.height * 3.937)} in
              </p>
              <p className="poke-weight">
                Weight: {Math.floor(item.pokemon.weight * 0.220462)} lbs
              </p>
            </div>
          </div>

          <div className="poke-info">
            <div className="type-left">
              <ul>
                <li>
                  <p>
                    Type: <strong>{item.pokemon.types[0].type.name}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base experience:
                    <strong>{item.pokemon.base_experience}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base HP: <strong>{item.pokemon.stats[0].base_stat}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Attack:{" "}
                    <strong>{item.pokemon.stats[1].base_stat}</strong>
                  </p>
                </li>
              </ul>
            </div>
            <div className="type-right">
              <ul>
                <li>
                  <p>
                    Base Defence:{" "}
                    <strong>{item.pokemon.stats[2].base_stat}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Special ATK:{" "}
                    <strong>{item.pokemon.stats[3].base_stat}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Special DEF:{" "}
                    <strong>{item.pokemon.stats[4].base_stat}</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Speed:{" "}
                    <strong>{item.pokemon.stats[5].base_stat}</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="poke-stats">
            <div className="stat1">
              <ul className="stat-list">
                <li>
                  <p>
                    <b>Habitat: </b> {item.species.habitat.name}
                  </p>
                </li>
                <li>
                  <p>
                    {item.species.flavor_text_entries[0].flavor_text.replace(
                      "",
                      " "
                    )}
                  </p>
                </li>
                <li>
                  <p>
                    {item.species.flavor_text_entries[3].flavor_text.replace(
                      "",
                      " "
                    )}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
