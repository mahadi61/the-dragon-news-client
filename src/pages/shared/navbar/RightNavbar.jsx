import React from "react";
import { Button } from "react-bootstrap";
import { BsGithub, BsGoogle } from "react-icons/bs";
import SocialLink from "../../socialLink/SocialLink";

const RightNavbar = () => {
  return (
    <div>
      <div className="border py-4 px-3 mt-2">
        <h4>Login With</h4>
        <Button variant="outline-primary w-100  d-flex justify-content-center gap-2">
          <BsGoogle className="fs-4" /> Login With Google
        </Button>
        <Button variant="outline-primary w-100  d-flex justify-content-center gap-2 mt-3">
          <BsGithub className="fs-4" /> Login With Google
        </Button>
      </div>

      <div className="border mt-3 py-4 px-3">
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default RightNavbar;
