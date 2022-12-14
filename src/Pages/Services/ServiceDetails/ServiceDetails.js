import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Reviews from "../../Reviews/Reviews/Reviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { name, img, description, price } = service;
  useTitle(name);

  return (
    <div>
      <div className="card max-w-sm md:max-w-lg lg:max-w-[60%] mx-auto my-14 bg-base-100 shadow-xl">
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
      <Reviews service={service}></Reviews>
    </div>
  );
};

export default ServiceDetails;
