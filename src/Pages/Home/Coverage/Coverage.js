import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import CoverageCard from "./CoverageCard";

const Coverage = () => {
  const areas = ["GULSHAN", "BANANI", "UTTARA", "MOTIJHEEL", "DHANMONDI", "KHILGAON", "MIRPUR", "TEJGAON", "LALBAGH "];

  return (
    <div className="mx-10 my-11 md:my-28 p-10 glass rounded-2xl shadow-xl">
      <h2 className="flex items-center text-xl md:text-3xl bg-base-200 w-fit px-4 py-3 rounded-xl">
        <span className="mr-4">Delivery Coverage</span>
        <MdOutlineDeliveryDining />
      </h2>
      <p className="mt-4 mb-7">
        Right now I am providing delivery service <br /> in these locations only.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
        {areas.map((area, idx) => (
          <CoverageCard key={idx} area={area}></CoverageCard>
        ))}
      </div>
    </div>
  );
};

export default Coverage;
