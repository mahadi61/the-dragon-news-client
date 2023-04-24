import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <div>
      <div>
        <HeaderTop></HeaderTop>
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
          <Link to="/" className="text-decoration-none text-black mx-3">
            Home
          </Link>
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
