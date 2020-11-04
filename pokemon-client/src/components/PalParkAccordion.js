import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const PalParkAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Pal Park Encounters
        </Accordion.Toggle>{" "}
        {pokemon.info.pal_park_encounters.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>{item.area.name}</h6>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default PalParkAccordion;
