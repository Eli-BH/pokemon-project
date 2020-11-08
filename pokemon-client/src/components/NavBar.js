import React from "react";
import { CgPokemon } from "react-icons/cg";
import { MdPerson } from "react-icons/md";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const NavBar = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
  };

  return (
    <Navbar bg="danger" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <span>
          <CgPokemon />
        </span>
        PokéBook
      </Navbar.Brand>

      <Nav className="ml-auto mr-1">
        <LinkContainer to="/profile">
          <Nav.Link>
            <span>
              <MdPerson />{" "}
            </span>{" "}
            Profile
          </Nav.Link>
        </LinkContainer>

        {userInfo ? (
          <Button variant="dark" size="md" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <LinkContainer to="/login">
            <Button variant="primary" size="sm">
              Login
            </Button>
          </LinkContainer>
        )}
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavBar);
