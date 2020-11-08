import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePokemonAction } from "../actions/pokemonActions";
import { Row, Col, Container, Image, Button, Modal } from "react-bootstrap";

import "../styles/profileStyles.css";
import Stats from "../components/Stats";
import SpeciesInfo from "../components/SpeciesInfo";
import BaseStats from "../components/BaseStats";
import AbilitiesAccordion from "../components/AbilitiesAccordion";
import FormsAccordion from "../components/FormsAccordion";
import GameIndiciesAccordion from "../components/GameIndiciesAccordion";
import HeldItemsAccordion from "../components/HeldItemsAccordion";
import MovesAccordion from "../components/MovesAccordion";
import LocationAccordion from "../components/LocationAccordion";
import SpritesAccordion from "../components/SpritesAccordion";
import VarietiesAccordion from "../components/VarietiesAccordion";
import PalParkAccordion from "../components/PalParkAccordion";
import PokedexAccordion from "../components/PokedexAccordion";
import EvolutionChainAccordion from "../components/EvolutionChainAccordion";
import EggGroupsAccordion from "../components/EggGroupsAccordion";
import Loader from "../components/Loader";

import { addPokemon } from "../actions/userActions";

const PokeProfileView = ({ match }) => {
  const [showModal, setShowModal] = useState(false);

  const disptach = useDispatch();

  const getSinglePokemon = useSelector((state) => state.getSinglePokemon);
  const { error, loading, pokemon, success } = getSinglePokemon;

  const userAddPokemon = useSelector((state) => state.userAddPokemon);
  const { error: addPokemonError, success: addPokemonSuccess } = userAddPokemon;

  useEffect(() => {
    disptach(getSinglePokemonAction(match.params.id));
  }, [disptach, match.params.id]);

  const handleAddToDeckButton = (e) => {
    e.preventDefault();

    //named it card as in pokemon card

    const card = {
      id: pokemon.stats.id,
      pokemonName: pokemon.stats.name,
      type0: pokemon.stats.types[0].type.name,
      type1: pokemon.stats.types[1] ? pokemon.stats.types[1].type.name : null,
      sprite: pokemon.stats.sprites.front_default,
      height: pokemon.stats.height,
      weight: pokemon.stats.weight,
      baseExperience: pokemon.stats.base_experience,
      baseStat0: pokemon.stats.stats[0].base_stat,
      baseStat1: pokemon.stats.stats[1].base_stat,
      baseStat2: pokemon.stats.stats[2].base_stat,
      baseStat3: pokemon.stats.stats[3].base_stat,
      baseStat4: pokemon.stats.stats[4].base_stat,
      baseStat5: pokemon.stats.stats[5].base_stat,
      habitat: pokemon.info.habitat.name,
      flavorText0: pokemon.info.flavor_text_entries[1].flavor_text,
      flavorText1: pokemon.info.flavor_text_entries[3].flavor_text,
    };

    disptach(addPokemon(card));
    setShowModal(true);
  };

  return (
    <div className="my-5">
      {addPokemonSuccess && (
        <Modal
          centered
          size="sm"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Body as="Alert" variant="success">
            Pokemon added to deck
          </Modal.Body>
        </Modal>
      )}
      {addPokemonError && (
        <Modal
          centered
          size="sm"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Body as="Alert">{addPokemonError}</Modal.Body>
        </Modal>
      )}
      {/* <h1>{`Hello from the Pokefile view ${match.params.id}`}</h1> */}
      <Container className="mt-5">
        <Row className="row-1">
          {error && console.log(error)}
          {loading ? (
            <Loader />
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

                <Button
                  variant="danger"
                  className="mt-3"
                  onClick={handleAddToDeckButton}
                >
                  Add to deck
                </Button>
              </Col>
            )
          )}
        </Row>
        <h3 className="row-2 mt-4 ">Pokémon Info</h3>
        {error && console.log(error)}
        {loading ? (
          <Loader />
        ) : (
          success && (
            <Row className="my-5">
              <Col md={6} sm={12}>
                <Stats pokemon={pokemon} />
              </Col>
              <Col md={6} sm={12}>
                <SpeciesInfo pokemon={pokemon} />
              </Col>
            </Row>
          )
        )}

        <Row>
          <Col>
            {error && console.log(error)}
            {loading ? <Loader /> : success && <BaseStats pokemon={pokemon} />}
          </Col>
        </Row>

        <Row className="row-2 ">
          <Col sm={12} md={6}>
            {error && console.log(error)}
            {loading ? (
              <Loader />
            ) : (
              success && (
                <div>
                  {/* Abilities */}
                  <AbilitiesAccordion pokemon={pokemon} />

                  {/* Forms */}
                  <FormsAccordion pokemon={pokemon} />

                  {/* Game Indicies */}
                  <GameIndiciesAccordion pokemon={pokemon} />

                  {/* Held Items */}
                  <HeldItemsAccordion pokemon={pokemon} />

                  {/* Moves  */}
                  <MovesAccordion pokemon={pokemon} />

                  {/* Location encoutners */}
                  <LocationAccordion pokemon={pokemon} />

                  {/* Sprites */}
                  <SpritesAccordion pokemon={pokemon} />
                </div>
              )
            )}
          </Col>
          <Col sm={12} md={6}>
            {error && console.log(error)}
            {loading ? (
              <Loader />
            ) : (
              success && (
                <div>
                  {/*Varieties */}
                  <VarietiesAccordion pokemon={pokemon} />

                  {/* Pal Park Encounters */}
                  <PalParkAccordion pokemon={pokemon} />

                  {/* Pokedex Numbers */}
                  <PokedexAccordion pokemon={pokemon} />

                  {/* Egg Groups  */}
                  <EggGroupsAccordion pokemon={pokemon} />

                  {/* Evolution Chain */}
                  <EvolutionChainAccordion
                    pokemon={pokemon}
                    success={success}
                  />
                </div>
              )
            )}
          </Col>
        </Row>

        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default PokeProfileView;
