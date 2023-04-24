import React from "react";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const QuizZone = () => {
  return (
    <div className="bg-secondary mt-3 d-flex flex-column py-4 px-3">
      <img src={qZone1} alt="" />
      <img src={qZone2} alt="" />
      <img src={qZone3} alt="" />
    </div>
  );
};

export default QuizZone;
