import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemonAction } from "../actions/pokemonActions";
import { Container, Row } from "react-bootstrap";
import Paginate from "../components/Paginate";
import Card from "../components/Card";

const PokemonHomeView = ({ history }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  const dispatch = useDispatch();
  const getAllPokemon = useSelector((state) => state.getAllPokemon);
  const { error, loading, pokemon, success } = getAllPokemon;

  useEffect(() => {
    dispatch(getAllPokemonAction());
  }, [dispatch]);

  // //Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts =
  //   success && pokemon.slice(indexOfFirstPost, indexOfLastPost);

  // //changePage
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="home-view">
      <Container fluid>
        <Row className="justify-content-around">
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
          {/* <Paginate
        postsPerPage={postsPerPage}
        totalPosts={success && pokemon.length}
        paginate={paginate}
      /> */}
        </Row>
      </Container>
    </div>
  );
};

export default PokemonHomeView;
