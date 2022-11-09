import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, name, img, description, price } = service;
  return (
    <div>
      <div className="card max-w-[50%] mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="mt-3 card-actions justify-between flex-col md:flex-row">
            <h3 className="text-xl font-semibold">Price: ${price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
