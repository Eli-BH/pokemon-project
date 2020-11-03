import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePokemonAction } from "../actions/pokemonActions";
import { Row, Col, Container, Image } from "react-bootstrap";

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
              <Col md="auto" className="profile-img-container">
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
        <Row></Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default PokeProfileView;
