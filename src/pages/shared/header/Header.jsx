import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      <div className=" text-center my-4">
        <img src={logo} alt="" />
        <h5>Journalism Without Fear or Favour</h5>
        <span>{moment().format("dddd, MMMM D, YYYY")}</span>
      </div>
      <div className="bg-secondary text-white my-3 d-flex">
        <Button variant="primary">Latest</Button>
        <Marquee pauseOnHover speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div className="d-flex justify-content-between">
        <div className="mx-auto">
          <Link className="text-decoration-none text-black mx-3">Home</Link>
          <Link className="text-decoration-none text-black mx-3">About</Link>
          <Link className="text-decoration-none text-black mx-3">Career</Link>
        </div>
        <div>
          <CgProfile className="fs-1 me-3" />
          <Button variant="dark">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
