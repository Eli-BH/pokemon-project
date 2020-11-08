import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "react-bootstrap";

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
    <div className="my-5">
      <h1 className="my-5">Username</h1>

      <h1 className="my-5">My Favorite Cards</h1>
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
    </div>
  );
};

export default ProfileView;
