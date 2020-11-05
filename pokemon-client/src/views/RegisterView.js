import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/authStyles.css";

const RegisterView = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState(" ");

  const handleSubmit = () => {
    alert("registered");
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <Form className="register" onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <h3>Email address</h3>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>
              <h3>Username</h3>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>
              <h3>Password</h3>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter password" />
          </Form.Group>
          <Button type="submit" className="register-button">
            Submit
          </Button>
          <Link to="/login">
            <Button variant="dark" className="mx-3">
              Already have an acount?
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default RegisterView;
