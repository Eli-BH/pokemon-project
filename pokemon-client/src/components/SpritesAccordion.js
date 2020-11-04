import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const SpritesAccordion = ({ pokemon }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Button} eventKey="1">
          Sprites
        </Accordion.Toggle>
        {
          <>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h5>Default</h5>
                <img
                  src={pokemon.stats.sprites.front_default}
                  alt="front_default"
                />
                {pokemon.stats.sprites.front_female && (
                  <img
                    src={pokemon.stats.sprites.front_female}
                    alt="front_female"
                  />
                )}
                {pokemon.stats.sprites.front_shiny && (
                  <img
                    src={pokemon.stats.sprites.front_shiny}
                    alt="front_shiny"
                  />
                )}
                {pokemon.stats.sprites.front_shiny_female && (
                  <img
                    src={pokemon.stats.sprites.front_shiny_female}
                    alt="front_shiny_female"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h5>Dream World</h5>
                {pokemon.stats.sprites.other.dream_world.front_default && (
                  <img
                    src={pokemon.stats.sprites.other.dream_world.front_default}
                    alt="front_dream_world"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Official artwork</h5>
                {pokemon.stats.sprites.other["official-artwork"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt="official-artwork"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 1</h1>
                <h5>Red | Blue</h5>
                {pokemon.stats.sprites.versions["generation-i"]["red-blue"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-i"]["red-blue"]
                        .front_gray
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-i"]["red-blue"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-i"]["red-blue"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Yellow</h5>
                {pokemon.stats.sprites.versions["generation-i"]["yellow"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-i"]["yellow"]
                        .front_gray
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-i"]["yellow"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-i"]["yellow"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 2</h1>
                <h5>Crystal</h5>
                {pokemon.stats.sprites.versions["generation-ii"]["crystal"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["crystal"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-ii"]["crystal"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["crystal"]
                        .front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}

                <h5>Gold</h5>
                {pokemon.stats.sprites.versions["generation-ii"]["gold"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["gold"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-ii"]["gold"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["gold"]
                        .front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Silver</h5>
                {pokemon.stats.sprites.versions["generation-ii"]["silver"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["silver"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-ii"]["silver"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-ii"]["silver"]
                        .front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 3</h1>
                <h5>Emerald</h5>
                {pokemon.stats.sprites.versions["generation-iii"]["emerald"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "emerald"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iii"]["emerald"]
                  .front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "emerald"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}

                <h5>Fire red | Leaf green</h5>
                {pokemon.stats.sprites.versions["generation-iii"][
                  "firered-leafgreen"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "firered-leafgreen"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iii"][
                  "firered-leafgreen"
                ].front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "firered-leafgreen"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Ruby | Sapphire</h5>
                {pokemon.stats.sprites.versions["generation-iii"][
                  "ruby-sapphire"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "ruby-sapphire"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iii"][
                  "ruby-sapphire"
                ].front_gray && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iii"][
                        "ruby-sapphire"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 4</h1>
                <h5>Diamond | Pearl</h5>
                {pokemon.stats.sprites.versions["generation-iv"][
                  "diamond-pearl"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "diamond-pearl"
                ].front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "diamond-pearl"
                ].front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "diamond-pearl"
                ].front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Heartgold | Soulsilver</h5>
                {pokemon.stats.sprites.versions["generation-iv"][
                  "heartgold-soulsilver"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "heartgold-soulsilver"
                ].front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "heartgold-soulsilver"
                ].front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"][
                  "heartgold-soulsilver"
                ].front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                <h5>Platinum</h5>
                {pokemon.stats.sprites.versions["generation-iv"]["platinum"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "platinum"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"]["platinum"]
                  .front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "platinum"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"]["platinum"]
                  .front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "platinum"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-iv"]["platinum"]
                  .front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-iv"][
                        "platinum"
                      ].front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 5</h1>
                <h5>Black | White</h5>
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}

                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].animated.front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .animated.front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].animated.front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .animated.front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].animated.front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-v"]["black-white"]
                  .animated.front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-v"][
                        "black-white"
                      ].animated.front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 6</h1>
                <h5>Omega Ruby | Alpha Sapphire</h5>
                {pokemon.stats.sprites.versions["generation-vi"][
                  "omegaruby-alphasapphire"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"][
                        "omegaruby-alphasapphire"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"][
                  "omegaruby-alphasapphire"
                ].front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"][
                        "omegaruby-alphasapphire"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"][
                  "omegaruby-alphasapphire"
                ].front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"][
                        "omegaruby-alphasapphire"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"][
                  "omegaruby-alphasapphire"
                ].front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"][
                        "omegaruby-alphasapphire"
                      ].front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}

                <h5>X | Y</h5>
                {pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                  .front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                        .front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                  .front_default_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                        .front_default_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                  .front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                        .front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                  .front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vi"]["x-y"]
                        .front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <h1>Generation 7</h1>
                <h5>Ultra Sun | Ultra Moon</h5>
                {pokemon.stats.sprites.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_default && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vii"][
                        "ultra-sun-ultra-moon"
                      ].front_default
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vii"][
                        "ultra-sun-ultra-moon"
                      ].front_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_shiny && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vii"][
                        "ultra-sun-ultra-moon"
                      ].front_shiny
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
                {pokemon.stats.sprites.versions["generation-vii"][
                  "ultra-sun-ultra-moon"
                ].front_shiny_female && (
                  <img
                    src={
                      pokemon.stats.sprites.versions["generation-vii"][
                        "ultra-sun-ultra-moon"
                      ].front_shiny_female
                    }
                    alt="version 1"
                    width="96px"
                    height="96px"
                  />
                )}
              </Card.Body>
            </Accordion.Collapse>
          </>
        }
      </Card>
    </Accordion>
  );
};

export default SpritesAccordion;
