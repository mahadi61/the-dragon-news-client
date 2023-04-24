import React from "react";
import { Nav } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialLink = () => {
  return (
    <div>
      <Nav className="flex-column">
        <Nav.Link>
          <BsFacebook className="me-2 fs-3" /> Facebook
        </Nav.Link>
        <Nav.Link>
          <BsTwitter className="me-2 fs-3" />
          Twitter
        </Nav.Link>
        <Nav.Link>
          <BsInstagram className="me-2 fs-3" />
          Instagram
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default SocialLink;
