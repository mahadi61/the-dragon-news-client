import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BsGithub, BsGoogle } from "react-icons/bs";
import SocialLink from "../../socialLink/SocialLink";
import QuizZone from "../quiz/QuizZone";
import CreateNewsPaper from "../createNewspaper/CreateNewsPaper";
import { AuthContext } from "../../../providers/AuthProviders";

const RightNavbar = () => {
  const { singUpWithGoogle } = useContext(AuthContext);

  const singInGoogle = () => {
    singUpWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="border py-4 px-3 mt-2">
        <h4>Login With</h4>
        <Button
          onClick={singInGoogle}
          variant="outline-primary w-100  d-flex justify-content-center gap-2"
        >
          <BsGoogle className="fs-4" /> Login With Google
        </Button>
        <Button variant="outline-primary w-100  d-flex justify-content-center gap-2 mt-3">
          <BsGithub className="fs-4" /> Login With Google
        </Button>
      </div>

      <div className="border mt-3 py-4 px-3">
        <SocialLink></SocialLink>
      </div>
      <div>
        <QuizZone></QuizZone>
      </div>
      <div>
        <CreateNewsPaper></CreateNewsPaper>
      </div>
    </div>
  );
};

export default RightNavbar;
