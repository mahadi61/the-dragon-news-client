import React from "react";
import HeaderNav from "../shared/header/HeaderNav";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="pt-4">
      <HeaderNav></HeaderNav>

      <Form className="w-50 mx-auto mt-4 p-5 border border-black rounded">
        <h4 className="fw-bold text-center">Login your account</h4>
        <hr className="my-4" />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button className="w-100 fw-bold mt-4" variant="secondary">
          Login
        </Button>
        <div className="text-center mt-3">
          <span>
            Don’t Have An Account ?{" "}
            <Link to="/register" className=" text-danger fw-bold">
              Register
            </Link>
          </span>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
