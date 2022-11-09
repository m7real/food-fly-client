import React from "react";
import { Dna } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dna visible={true} height="60" width="60" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
    </div>
  );
};

export default Spinner;
