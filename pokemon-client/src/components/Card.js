import React from "react";
import "../styles/largeCardStyle.css";

const Card = ({ name }) => {
  return (
    <div className="card-container">
      <div className="card-face">
        <div className="card-content">
          <div className="card-header">
            <h2 className="poke-name">{name}</h2>
          </div>

          <div className="card-img-container">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
              alt="pikachu"
              className="pokemon-sprite"
            />
            <div className="poke-measure">
              <p className="poke-height">Height: 4</p>
              <p className="poke-weight">Weight: 60</p>
            </div>
          </div>

          <div className="poke-info">
            <div className="type-left">
              <ul>
                <li>
                  <p>
                    Type: <strong>Electric</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base experience:<strong>112</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base HP: <strong>35</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Attack: <strong>55</strong>
                  </p>
                </li>
              </ul>
            </div>
            <div className="type-right">
              <ul>
                <li>
                  <p>
                    Base Defence: <strong>40</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Special ATK: <strong>50</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Special DEF: <strong>50</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Base Speed: <strong>90</strong>
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
                    Some kind of stat goes here:<b>Have not decided which</b>
                  </p>
                </li>
                <li>
                  <p>
                    Some kind of stat goes here: <b>Have not decided which</b>
                  </p>
                </li>
                <li>
                  <p>
                    Some kind of stat goes here: <b>Have not decided which</b>
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
