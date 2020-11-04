import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePokemonAction } from "../actions/pokemonActions";
import { Row, Col, Container, Image } from "react-bootstrap";

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

const PokeProfileView = ({ match }) => {
  const disptach = useDispatch();

  const getSinglePokemon = useSelector((state) => state.getSinglePokemon);
  const { error, loading, pokemon, success } = getSinglePokemon;

  useEffect(() => {
    disptach(getSinglePokemonAction(match.params.id));
  }, [disptach]);

  return (
    <div className="my-5">
      {/* <h1>{`Hello from the Pokefile view ${match.params.id}`}</h1> */}
      <Container className="mt-5">
        <Row className="row-1">
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
        <h3 className="row-2 mt-4 ">Pokémon Info</h3>
        {error && console.log(error)}
        {loading ? (
          <h1>loading</h1>
        ) : (
          success && (
            <Row>
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
            {loading ? (
              <h1>loading</h1>
            ) : (
              success && <BaseStats pokemon={pokemon} />
            )}
          </Col>
        </Row>

        <Row className="row-2 ">
          <Col sm={12} md={6}>
            {error && console.log(error)}
            {loading ? (
              <h1>loading</h1>
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
              <h1>loading</h1>
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
                  <PokedexAccordion pokemon={pokemon} />

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
