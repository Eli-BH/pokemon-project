import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const EvolutionChainAccordion = ({ pokemon, success }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Evolution Chain
        </Accordion.Toggle>{" "}
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Link
              to={
                success &&
                `/pokeprofile/${
                  pokemon.evolution.chain.species.url.split("/")[6]
                }`
              }
            >
              <h2>{success && pokemon.evolution.chain.species.name}</h2>
            </Link>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h1>
              <BiDownArrowAlt />
            </h1>
            <Link
              to={
                success &&
                `/pokeprofile/${
                  pokemon.evolution.chain.evolves_to[0].species.url.split(
                    "/"
                  )[6]
                }`
              }
            >
              <h2>
                {success && pokemon.evolution.chain.evolves_to[0].species.name}
              </h2>
            </Link>
          </Card.Body>
        </Accordion.Collapse>
        {pokemon.evolution.chain.evolves_to[0].evolves_to[0] ? (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h1>
                <BiDownArrowAlt />
              </h1>
              <Link
                to={
                  success &&
                  `/pokeprofile/${
                    pokemon.evolution.chain.evolves_to[0].evolves_to[0].species.url.split(
                      "/"
                    )[6]
                  }`
                }
              >
                <h2>
                  {success &&
                    pokemon.evolution.chain.evolves_to[0].evolves_to[0].species
                      .name}
                </h2>
              </Link>
            </Card.Body>
          </Accordion.Collapse>
        ) : null}
      </Card>
    </Accordion>
  );
};

export default EvolutionChainAccordion;
