import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const EvolutionChainAccordion = ({ pokemon, success }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Evolution Chain
        </Accordion.Toggle>{" "}
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {success && pokemon.evolution.chain.species.name}
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {success && pokemon.evolution.chain.evolves_to[0].species.name}
          </Card.Body>
        </Accordion.Collapse>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            {success &&
              pokemon.evolution.chain.evolves_to[0].evolves_to[0].species.name}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default EvolutionChainAccordion;
