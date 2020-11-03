import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePokemonAction } from "../actions/pokemonActions";
import {
  Row,
  Col,
  Container,
  Image,
  Accordion,
  Card,
  Button,
  AccordionToggle,
} from "react-bootstrap";

import "../styles/profileStyles.css";

const PokeProfileView = ({ match }) => {
  const disptach = useDispatch();

  const getSinglePokemon = useSelector((state) => state.getSinglePokemon);
  const { error, loading, pokemon, success } = getSinglePokemon;

  useEffect(() => {
    disptach(getSinglePokemonAction(match.params.id));
  }, [disptach]);

  return (
    <div>
      {/* <h1>{`Hello from the Pokefile view ${match.params.id}`}</h1> */}
      <Container className="mt-5">
        <Row>
          {error && console.log(error)}
          {loading ? (
            <h1>loading</h1>
          ) : (
            success && (
              <Col md="auto" className="profile-img-container my-5">
                <Image
                  src={pokemon.stats.sprites.front_default}
                  roundedCircle
                  className="profile-img"
                />
                <h1 className="m-auto">
                  {pokemon.stats.name.charAt(0).toUpperCase() +
                    pokemon.stats.name.slice(1)}
                </h1>
              </Col>
            )
          )}
        </Row>

        <Row className="row-2 ">
          <Col>
            {error && console.log(error)}
            {loading ? (
              <h1>loading</h1>
            ) : (
              success && (
                <div>
                  <p className="my-3">
                    <strong>Id: </strong>
                    {pokemon.stats.id}
                  </p>
                  <p className="my-3">
                    <strong>Weight: </strong>
                    {pokemon.stats.weight}
                  </p>
                  <p className="my-3">
                    <strong>Height: </strong>
                    {pokemon.stats.height}
                  </p>
                  <p className="my-3">
                    <strong>Color: </strong>
                    {pokemon.info.color.name}
                  </p>
                  <p className="my-3">
                    <strong>Base Experience: </strong>
                    {pokemon.stats.base_experience}
                  </p>
                  <p className="my-3">
                    <strong>Starter Pokemon: </strong>
                    {pokemon.stats.is_default ? "True" : "False"}
                  </p>

                  <h3 className="my-5"></h3>

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
                  <Accordion>
                    <Card>
                      <Accordion.Toggle as={Button} eventKey="1">
                        Game indicies
                      </Accordion.Toggle>
                      {pokemon.stats.game_indices.map((item) => (
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p>
                              <strong>Game: </strong> Pokémon{" "}
                              {item.version.name}
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      ))}
                    </Card>
                  </Accordion>
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
                              {location.location_area.name
                                .charAt(0)
                                .toUpperCase() +
                                location.location_area.name
                                  .slice(1)
                                  .replaceAll("-", " ")}
                            </p>
                          </Card.Body>
                        </Accordion.Collapse>
                      ))}
                    </Card>
                  </Accordion>

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
                              {pokemon.stats.sprites.other.dream_world
                                .front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.other.dream_world
                                      .front_default
                                  }
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
                                    pokemon.stats.sprites.other[
                                      "official-artwork"
                                    ].front_default
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
                              <h5>Red | Blue</h5>
                              {pokemon.stats.sprites.versions["generation-i"][
                                "red-blue"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-i"
                                    ]["red-blue"].front_gray
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-i"][
                                "red-blue"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-i"
                                    ]["red-blue"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              <h5>Yellow</h5>
                              {pokemon.stats.sprites.versions["generation-i"][
                                "yellow"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-i"
                                    ]["yellow"].front_gray
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-i"][
                                "yellow"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-i"
                                    ]["yellow"].front_default
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
                              <h5>Crystal</h5>
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "crystal"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["crystal"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "crystal"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["crystal"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}

                              <h5>Gold</h5>
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "gold"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["gold"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "gold"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["gold"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              <h5>Silver</h5>
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "silver"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["silver"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-ii"][
                                "silver"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-ii"
                                    ]["silver"].front_shiny
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
                              <h5>Emerald</h5>
                              {pokemon.stats.sprites.versions["generation-iii"][
                                "emerald"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["emerald"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-iii"][
                                "emerald"
                              ].front_gray && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["emerald"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["firered-leafgreen"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["firered-leafgreen"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["ruby-sapphire"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iii"
                                    ]["ruby-sapphire"].front_shiny
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
                              <h5>Diamond | Pearl</h5>
                              {pokemon.stats.sprites.versions["generation-iv"][
                                "diamond-pearl"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["diamond-pearl"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["diamond-pearl"].front_female
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["diamond-pearl"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["diamond-pearl"].front_shiny_female
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["heartgold-soulsilver"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["heartgold-soulsilver"].front_female
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["heartgold-soulsilver"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["heartgold-soulsilver"].front_shiny_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              <h5>Platinum</h5>
                              {pokemon.stats.sprites.versions["generation-iv"][
                                "platinum"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["platinum"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-iv"][
                                "platinum"
                              ].front_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["platinum"].front_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-iv"][
                                "platinum"
                              ].front_shiny && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["platinum"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-iv"][
                                "platinum"
                              ].front_shiny_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-iv"
                                    ]["platinum"].front_shiny_female
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
                              <h5>Black | White</h5>
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].front_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].front_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].front_shiny && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].front_shiny_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}

                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].animated.front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].animated.front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].animated.front_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].animated.front_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].animated.front_shiny && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].animated.front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-v"][
                                "black-white"
                              ].animated.front_shiny_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-v"
                                    ]["black-white"].animated.front_shiny
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
                              <h5>Omega Ruby | Alpha Sapphire</h5>
                              {pokemon.stats.sprites.versions["generation-vi"][
                                "omegaruby-alphasapphire"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["omegaruby-alphasapphire"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["omegaruby-alphasapphire"].front_female
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["omegaruby-alphasapphire"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["omegaruby-alphasapphire"]
                                      .front_shiny_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}

                              <h5>X | Y</h5>
                              {pokemon.stats.sprites.versions["generation-vi"][
                                "x-y"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["x-y"].front_default
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-vi"][
                                "x-y"
                              ].front_default_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["x-y"].front_default_female
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-vi"][
                                "x-y"
                              ].front_shiny && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["x-y"].front_shiny
                                  }
                                  alt="version 1"
                                  width="96px"
                                  height="96px"
                                />
                              )}
                              {pokemon.stats.sprites.versions["generation-vi"][
                                "x-y"
                              ].front_shiny_female && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vi"
                                    ]["x-y"].front_shiny_female
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
                              <h5>Ultra Sun | Ultra Moon</h5>
                              {pokemon.stats.sprites.versions["generation-vii"][
                                "ultra-sun-ultra-moon"
                              ].front_default && (
                                <img
                                  src={
                                    pokemon.stats.sprites.versions[
                                      "generation-vii"
                                    ]["ultra-sun-ultra-moon"].front_default
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vii"
                                    ]["ultra-sun-ultra-moon"].front_female
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vii"
                                    ]["ultra-sun-ultra-moon"].front_shiny
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
                                    pokemon.stats.sprites.versions[
                                      "generation-vii"
                                    ]["ultra-sun-ultra-moon"].front_shiny_female
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
                </div>
              )
            )}
          </Col>
        </Row>

        <Row></Row>
      </Container>
    </div>
  );
};

export default PokeProfileView;
