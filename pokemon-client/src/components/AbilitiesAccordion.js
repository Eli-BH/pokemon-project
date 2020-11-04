import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AbilitiesAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Abilities
        </Accordion.Toggle>

        {pokemon.stats.abilities.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <strong>Ability: </strong> {item.ability.name}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default AbilitiesAccordion;
