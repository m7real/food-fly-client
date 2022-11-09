import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, img, description, price } = service;

  return (
    <PhotoProvider>
      <div className="card max-w-sm bg-base-100 shadow-xl">
        <figure>
          <PhotoView src={img}>
            <img src={img} alt="Shoes" title="click to view" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description?.length > 100 ? description.slice(0, 100) + "..." : description}</p>
          <div className="mt-3 card-actions justify-between flex-col md:flex-row">
            <h3 className="text-xl font-semibold">Price: ${price}</h3>
            <Link to={`/services/${_id}`} className="btn btn-primary mt-2 md:mt-0">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
