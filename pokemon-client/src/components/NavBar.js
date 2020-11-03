import React from "react";
import { CgPokemon } from "react-icons/cg";
import { MdPerson } from "react-icons/md";
import { Nav, Navbar, Button } from "react-bootstrap";

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
        <Nav.Link>Profile</Nav.Link>
        <Button variant="primary" size="sm" className="mx-4">
          <span>
            <MdPerson />{" "}
          </span>{" "}
          Login
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
