import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const MovesAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Moves
        </Accordion.Toggle>
        {pokemon.stats.moves.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <strong>Move: </strong>
                {item.move.name}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default MovesAccordion;
