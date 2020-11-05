import React from "react";
import { CgPokemon } from "react-icons/cg";
import { MdPerson } from "react-icons/md";
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="danger" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <span>
          <CgPokemon />
        </span>
        PokéBook
      </Navbar.Brand>
      <Nav className="ml-auto mr-1">
        <Nav.Link>
          <span>
            <MdPerson />{" "}
          </span>{" "}
          Profile
        </Nav.Link>
        <LinkContainer to="/login">
          <Button variant="primary" size="sm" className="mx-4">
            Login
          </Button>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
