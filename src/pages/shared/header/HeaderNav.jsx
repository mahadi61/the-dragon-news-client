import React from "react";
import { Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
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
        <Link to="/login">
          <Button variant="dark">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;
