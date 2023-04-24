import React from "react";
import bg1 from "../../../assets/bg1.png";
import { Button } from "react-bootstrap";
const CreateNewsPaper = () => {
  return (
    <div className="mt-4 position-relative">
      <img className="w-100" src={bg1} alt="" />
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h4 className="fs-2">Create an Amazing Newspaper</h4>
        <p className="">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default CreateNewsPaper;
