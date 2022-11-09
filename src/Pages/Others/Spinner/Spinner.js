import React from "react";
import { Dna } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
    </div>
  );
};

export default Spinner;
