import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";

import UserDeckCard from "../components/UserDeckCard";
import { getUserDetails } from "../actions/userActions";

const ProfileView = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { user, loading, error } = userDetails;

  useEffect(() => {
    dispatch(getUserDetails());

    if (!user) {
      history.push("/");
    }
  }, [userInfo, history, dispatch, user]);

  return (
    <div className="home-view justify-content-center">
      <Container fluid>
        <h1>Hello {userInfo.username}!</h1>

        <h1 className="my-5">Here are your 25 favorite cards.</h1>
        <Row>
          {error && <h1>{error}</h1>}
          {user.pokemonDeck
            ? user.pokemonDeck.map((item) => (
                <div className="m-5">
                  <UserDeckCard card={item} />
                </div>
              ))
            : loading && <h1>Loading</h1>}
        </Row>
      </Container>
    </div>
  );
};

export default ProfileView;
