import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, img, description, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description?.length > 100 ? description.slice(0, 100) + "..." : description}</p>
        <div className="mt-3 card-actions justify-between">
          <h3 className="text-xl font-semibold">Price: ${price}</h3>
          <Link to={`/services/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
