import React from "react";
import HeaderNav from "../shared/header/HeaderNav";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Register = () => {
  return (
    <Container className="pt-4">
      <HeaderNav></HeaderNav>

      <Form className="w-50 mx-auto mt-4 p-5 border border-black rounded">
        <h4 className="fw-bold text-center">Register your account</h4>
        <hr className="my-4" />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="fw-bold">Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="fw-bold">Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter your photo link"
          />
        </Form.Group>
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

        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />

        <Button className="w-100 fw-bold mt-4" variant="secondary">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
