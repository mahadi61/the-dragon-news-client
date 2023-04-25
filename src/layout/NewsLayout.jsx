import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/shared/footer/footer";
import RightNavbar from "../pages/shared/navbar/RightNavbar";
import { Outlet } from "react-router-dom";
import HeaderTop from "../pages/shared/header/HeaderTop";

const NewsLayout = () => {
  return (
    <Container>
      <HeaderTop></HeaderTop>
      <h2>Dragon News</h2>
      <Container>
        <Row>
          <Col sm={9}>
            <Outlet></Outlet>
          </Col>
          <Col sm={3}>
            <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default NewsLayout;
