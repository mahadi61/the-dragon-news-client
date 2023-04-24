import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";

const HeaderTop = () => {
  return (
    <div className="text-center my-4 ">
      <img src={logo} className="img-fluid" alt="" />
      <h5>Journalism Without Fear or Favour</h5>
      <span>{moment().format("dddd, MMMM D, YYYY")}</span>
    </div>
  );
};

export default HeaderTop;
