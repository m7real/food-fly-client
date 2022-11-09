import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  // if (fetching) {
  //   return <Dna visible={true} height="48" width="48" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />;
  // }

  return (
    <div className=" mx-10 my-10">
      <h2 className="mb-10 text-4xl font-bold">Services:</h2>
      <div className="grid grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
