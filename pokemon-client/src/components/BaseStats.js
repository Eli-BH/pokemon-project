import React from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles/profileStyles.css";

const BaseStats = ({ pokemon }) => {
  return (
    <div className="stat-div">
      <h3 className="mt-5">Pokémon base stats: </h3>
      <div className="mt-3 mb-5">
        {pokemon.stats.stats.map((item) => (
          <p>
            <strong style={{ fontSize: "1.5rem" }}>
              {item.stat.name.toUpperCase()}:{" "}
            </strong>{" "}
            <span>
              <ProgressBar
                variant="danger"
                now={item.base_stat}
                label={item.base_stat}
                style={{ fontSize: 16, height: 20 }}
                className="base-stats"
              />
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default BaseStats;
