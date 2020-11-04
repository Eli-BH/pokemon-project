import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const HeldItemsAccordion = ({ pokemon }) => {
  return (
    <div>
      {pokemon.stats.held_items.length > 0 && (
        <Accordion>
          <Card>
            <Accordion.Toggle as={Button} eventKey="1">
              Held Items
            </Accordion.Toggle>
            {pokemon.stats.held_items.map((heldItem) => (
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>
                    <strong>Item: </strong>
                    {heldItem.item.name}
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            ))}
          </Card>
        </Accordion>
      )}
    </div>
  );
};

export default HeldItemsAccordion;
