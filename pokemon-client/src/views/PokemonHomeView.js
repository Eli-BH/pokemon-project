import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonAction } from "../actions/pokemonActions";
import { Container, Row, Pagination, Image } from "react-bootstrap";

import Card from "../components/Card";
import Loader from "../components/Loader";
import "../styles/homeStyle.css";
import Pokebook from "../styles/images/Pokebook.png";

const PokemonHomeView = ({ history }) => {
  const [offset, setOffset] = useState(0);

  const dispatch = useDispatch();
  const getAllPokemon = useSelector((state) => state.getAllPokemon);
  const { error, loading, pokemon, success } = getAllPokemon;

  useEffect(() => {
    dispatch(getAllPokemonAction(offset));
  }, [dispatch, offset]);

  // //Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts =
  //   success && pokemon.slice(indexOfFirstPost, indexOfLastPost);

  // //changePage
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-view justify-content-center">
      <Container fluid>
        <div className="mb-5 logo-div">
          <Image src={Pokebook} alt="Pokébook logo" />
        </div>
        <div>
          {!loading && (
            <Pagination className="justify-content-center paginate " size="lg">
              <Pagination.First onClick={() => setOffset(0)} />{" "}
              {offset > 0 && (
                <Pagination.Prev onClick={() => setOffset(offset - 50)} />
              )}
              {offset < 1000 && (
                <Pagination.Next onClick={() => setOffset(offset + 50)} />
              )}
              <Pagination.Last onClick={() => setOffset(1000)} />{" "}
            </Pagination>
          )}

          <Row className="justify-content-around">
            {" "}
            {
              //should replace with a styled error alert
              error && <h1>{error}</h1>
            }
            {loading ? (
              <Loader />
            ) : (
              success &&
              pokemon.map((item) => (
                <div key={item.pokemon.name}>
                  <Card item={item} />
                </div>
              ))
            )}
          </Row>

          {!loading && (
            <Pagination className="justify-content-center paginate " size="lg">
              <Pagination.First onClick={() => setOffset(0)} />{" "}
              {offset > 0 && (
                <Pagination.Prev onClick={() => setOffset(offset - 50)} />
              )}
              {offset < 1000 && (
                <Pagination.Next onClick={() => setOffset(offset + 50)} />
              )}
              <Pagination.Last onClick={() => setOffset(1000)} />{" "}
            </Pagination>
          )}
        </div>{" "}
      </Container>
    </div>
  );
};

export default PokemonHomeView;
