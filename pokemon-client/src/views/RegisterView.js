import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../styles/authStyles.css";
import { register } from "../actions/userActions";

const RegisterView = ({ history }) => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: loginUserInfo } = userLogin;

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch register

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(username, email, password));
    }
  };

  useEffect(() => {
    if (userInfo || loginUserInfo) {
      history.push("/");
    }
  }, [userInfo, history, loginUserInfo]);

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Sign Up!</h1>
        {loading && <h1>Loading...</h1>}
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="danger">{message}</Alert>}
        <Form className="register" onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>
              <h3>Email address</h3>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>
              <h3>Username</h3>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>
              <h3>Password</h3>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>
              <h3>Confirm password</h3>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
