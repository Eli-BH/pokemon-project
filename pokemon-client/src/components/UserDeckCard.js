import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import ReactCardFlip from "react-card-flip";
import { deletePokemon } from "../actions/userActions";

const UserDeckCard = ({ card }) => {
  const dispatch = useDispatch();

  //Flipped is to control the state of the card flip
  const [isFlipped, setIsFlipped] = useState(true);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePokemon({ id: card.id }));
  };

  return (
    <div>
      <div className="align-content-center">
        <Button variant="danger" onClick={handleDelete} className="mx-5 mb-2">
          Delete
        </Button>
        <LinkContainer to={`/pokeprofile/${card.id}`} className="mx-5 mb-2">
          <Button>{card.pokemonName}</Button>
        </LinkContainer>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          className="card-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`card-face background-${card.type0}`}>
            <div className="card-content">
              <div className="card-header">
                <h2 className="poke-name">{card.pokemonName}</h2>
              </div>

              <div className="card-img-container">
                <img
                  src={card.sprite}
                  alt={card.pokemonName}
                  className="pokemon-sprite"
                />
                <div className="poke-measure">
                  <p className="poke-height">
                    Height:{" "}
                    {
                      //conversion from decimeters to inches
                      Math.floor(card.height * 3.937)
                    }{" "}
                    in
                  </p>
                  <p className="poke-weight">
                    Weight:{" "}
                    {
                      //conversion from hectograms to pounds
                      Math.floor(card.weight * 0.220462)
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
                          {card.type0}{" "}
                          <span>
                            {
                              //test to see if pokemon is hybrid type
                              card.type1 ? `/ ${card.type1}` : null
                            }
                          </span>
                        </strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base experience:
                        <strong>{card.baseExperience}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base HP: <strong>{card.baseStat0}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base Attack: <strong>{card.baseStat1}</strong>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="type-right">
                  <ul>
                    <li>
                      <p>
                        Base Defence: <strong>{card.baseStat2}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base Special ATK: <strong>{card.baseStat3}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base Special DEF: <strong>{card.baseStat4}</strong>
                      </p>
                    </li>
                    <li>
                      <p>
                        Base Speed: <strong>{card.baseStat5}</strong>
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
                        <b>Habitat: </b>{" "}
                        {card.habitat ? card.habitat : "Not known yet"}
                      </p>
                    </li>
                    <li>
                      <p>{card.flavorText0.replace("", " ")}</p>
                    </li>
                    <li>
                      <p>{card.flavorText1.replace("", " ")}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-container-back">
          <div className="card-back" onClick={() => setIsFlipped(!isFlipped)}>
            <div className="card-content-back"></div>
          </div>
        </div>
      </ReactCardFlip>{" "}
    </div>
  );
};

export default UserDeckCard;
