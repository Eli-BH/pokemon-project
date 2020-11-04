import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonAction } from "../actions/pokemonActions";
import { Container, Row, Pagination } from "react-bootstrap";

import Card from "../components/Card";

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
    <div className="home-view">
      <Container className="py-5" fluid>
        <Row className="justify-content-around">
          {" "}
          {
            //should replace with a styled error alert
            error && <h1>{error}</h1>
          }
          {loading ? (
            <h1>loading</h1>
          ) : (
            success &&
            pokemon.map((item) => (
              <div key={item.pokemon.name}>
                <Card item={item} />
              </div>
            ))
          )}
        </Row>
        <Pagination className="justify-content-center">
          <Pagination.First onClick={() => setOffset(0)} />{" "}
          {offset > 0 && (
            <Pagination.Prev onClick={() => setOffset(offset - 50)} />
          )}
          {offset < 1000 && (
            <Pagination.Next onClick={() => setOffset(offset + 50)} />
          )}
          <Pagination.Last onClick={() => setOffset(1000)} />{" "}
        </Pagination>
      </Container>
    </div>
  );
};

export default PokemonHomeView;
