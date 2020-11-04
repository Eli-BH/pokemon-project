import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const LocationAccordion = ({ pokemon }) => {
  return (
    <div>
      {pokemon.locations.length > 0 && (
        <Accordion>
          <Card>
            <Accordion.Toggle as={Button} eventKey="1">
              Location encounters
            </Accordion.Toggle>
            {pokemon.locations.map((location) => (
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <p>
                    <strong>Location: </strong>
                    {location.location_area.name.charAt(0).toUpperCase() +
                      location.location_area.name.slice(1).replaceAll("-", " ")}
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

export default LocationAccordion;
