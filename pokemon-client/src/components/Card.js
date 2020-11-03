import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import ReactCardFlip from "react-card-flip";
import { Button } from "react-bootstrap";

import "../styles/largeCardStyle.css";

const Card = ({ item, history }) => {
  //Flipped is to control the state of the card flip
  const [isFlipped, setIsFlipped] = useState(true);
  //Retro is the pixel/original artwork for the card image
  const [isRetro, setIsRetro] = useState(true);

  return (
    <div className="my-5">
      <div>
        <LinkContainer to={`/pokeprofile/${item.pokemon.id}`}>
          <Button variant="dark" className="m-3" size="lg">
            {item.pokemon.name.charAt(0).toUpperCase() +
              item.pokemon.name.slice(1)}
          </Button>
        </LinkContainer>
      </div>

      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-container">
          <div
            className={`card-face background-${item.pokemon.types[0].type.name}`}
          >
            <div className="card-content">
              <div className="card-header">
                <h2 className="poke-name">
                  {item.pokemon.name.charAt(0).toUpperCase() +
                    item.pokemon.name.slice(1)}
                </h2>
              </div>

              <div className="card-img-container">
                <img
                  src={
                    isRetro
                      ? item.pokemon.sprites.front_default
                      : item.pokemon.sprites.other["official-artwork"]
                          .front_default
                  }
                  alt={item.pokemon.name}
                  className="pokemon-sprite"
                  onClick={() => setIsRetro(!isRetro)}
                />
                <div className="poke-measure">
                  <p className="poke-height">
                    Height:{" "}
                    {
                      //conversion from decimeters to inches
                      Math.floor(item.pokemon.height * 3.937)
                    }{" "}
                    in
                  </p>
                  <p className="poke-weight">
                    Weight:{" "}
                    {
                      //conversion from hectograms to pounds
                      Math.floor(item.pokemon.weight * 0.220462)
                    }{" "}
                    lbs
                  </p>
                </div>
              </div>

              <div
                className="poke-info"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="type-left">
                  <ul>
                    <li>
                      <p>
                        Type:{" "}
                        <strong>
                          {item.pokemon.types[0].type.name}{" "}
                          <span>
                            {
                              //test to see if pokemon is hybrid type
                              item.pokemon.types.length > 1
                                ? `/ ${item.pokemon.types[1].type.name}`
                                : null
                            }
                          </span>
                        </strong>
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
                        Base HP:{" "}
                        <strong>{item.pokemon.stats[0].base_stat}</strong>
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

              <div
                className="poke-stats"
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="stat1">
                  <ul className="stat-list">
                    <li>
                      <p>
                        <b>Habitat: </b> {item.species.habitat.name}
                      </p>
                    </li>
                    <li>
                      <p>
                        {item.species.flavor_text_entries[1].flavor_text.replace(
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
        {/* // this is where the beginning of the back of the card starts */}
        <div
          className="card-container-back"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="card-back">
            <div className="card-content-back"></div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default withRouter(Card);
