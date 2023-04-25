import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import HeaderTop from "./HeaderTop";
import { AuthContext } from "../../../providers/AuthProviders";
import HeaderNav from "./HeaderNav";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
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
      <div>
        <HeaderNav></HeaderNav>
      </div>
    </div>
  );
};

export default Header;
