import React from "react";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNavbar from "../pages/shared/navbar/RightNavbar";
import LeftNavbar from "../pages/shared/navbar/LeftNavbar";

const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Container>
        <Row>
          <Col sm={3}>
            <LeftNavbar></LeftNavbar>
          </Col>
          <Col sm={6}>Dragon News Home. Coming soon.....</Col>
          <Col sm={3}>
            <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Main;
