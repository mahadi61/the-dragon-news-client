import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="text-center my-4">
        <img src={logo} alt="" />
        <h5>Journalism Without Fear or Favour</h5>
        <span>{moment().format("dddd, MMMM D, YYYY")}</span>
      </div>
      <div className="px-3 my-3 d-flex">
        <Button variant="primary">Latest</Button>
        <Marquee speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <div className="d-flex justify-content-between">
        <div className="mx-auto">
          <Link className="mx-3">Home</Link>
          <Link className="mx-3">About</Link>
          <Link className="mx-3">Career</Link>
        </div>
        <div>
          <Button variant="dark">Dark</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
