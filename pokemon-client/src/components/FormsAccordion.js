import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const FormsAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Forms
        </Accordion.Toggle>
        {pokemon.stats.forms.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>
                <strong>Forms: </strong> {item.name}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default FormsAccordion;
