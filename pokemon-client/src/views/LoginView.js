import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/authStyles.css";

const LoginView = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState(" ");
  const handleSubmit = () => {
    alert("logged in");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <h3>Email address</h3>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>
              <h3>Password</h3>
            </Form.Label>
            <Form.Control type="text" placeholder="Enter password" />
          </Form.Group>

          <Button type="submit" className="login-button">
            Login
          </Button>

          <Link to="/register" className="mx-3">
            <Button variant="dark">Don't have an acount?</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;
