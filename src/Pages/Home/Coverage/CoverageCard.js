import React from "react";
import { ImLocation2 } from "react-icons/im";

const CoverageCard = ({ area }) => {
  return (
    <div className="flex justify-start items-center border border-white p-4 rounded-xl shadow-md">
      <ImLocation2 />
      <h2 className="text-xl md:text-2xl ml-6">{area}</h2>
    </div>
  );
};

export default CoverageCard;
