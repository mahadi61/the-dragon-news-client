import React from "react";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/footer";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Container>
        <Row>
          <Col sm={3}>left side Nav</Col>
          <Col sm={6}>Main area .......</Col>
          <Col sm={3}>Right side nav</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
