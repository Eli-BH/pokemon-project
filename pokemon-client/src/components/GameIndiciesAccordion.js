import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const GameIndiciesAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Game indicies
        </Accordion.Toggle>
        {pokemon.stats.game_indices.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <strong>Game: </strong> Pokémon {item.version.name}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default GameIndiciesAccordion;
