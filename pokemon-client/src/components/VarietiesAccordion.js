import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const VarietiesAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Varieties
        </Accordion.Toggle>{" "}
        {pokemon.info.varieties.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>{item.pokemon.name.replaceAll("-", " ")}</h6>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default VarietiesAccordion;
