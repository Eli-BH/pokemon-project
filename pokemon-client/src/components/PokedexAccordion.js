import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const PokedexAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Pokedex Numbers
        </Accordion.Toggle>{" "}
        {pokemon.info.pokedex_numbers.map((item) => (
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <h6>
                #{item.entry_number} -{" "}
                {item.pokedex.name.charAt(0).toUpperCase() +
                  item.pokedex.name.slice(1).replaceAll("-", " ")}
              </h6>
            </Card.Body>
          </Accordion.Collapse>
        ))}
      </Card>
    </Accordion>
  );
};

export default PokedexAccordion;
