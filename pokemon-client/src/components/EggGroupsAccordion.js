import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const EggGroupsAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Egg Groups
        </Accordion.Toggle>{" "}
        {pokemon.info.egg_groups.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>{item.name}</h6>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default EggGroupsAccordion;
