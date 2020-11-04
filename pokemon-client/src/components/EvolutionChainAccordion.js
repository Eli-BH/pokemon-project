import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { BiDownArrowAlt } from "react-icons/bi";

const EvolutionChainAccordion = ({ pokemon, success }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Evolution Chain
        </Accordion.Toggle>{" "}
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h2>{success && pokemon.evolution.chain.species.name}</h2>
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <h1>
              <BiDownArrowAlt />
            </h1>
            <h2>
              {success && pokemon.evolution.chain.evolves_to[0].species.name}
            </h2>
          </Card.Body>
        </Accordion.Collapse>
        {pokemon.evolution.chain.evolves_to[0].evolves_to[0] ? (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h1>
                <BiDownArrowAlt />
              </h1>
              <h2>
                {success &&
                  pokemon.evolution.chain.evolves_to[0].evolves_to[0].species
                    .name}
              </h2>
            </Card.Body>
          </Accordion.Collapse>
        ) : null}
      </Card>
    </Accordion>
  );
};

export default EvolutionChainAccordion;
