import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";
import Banner from "../Banner/Banner";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <div className=" mx-10 my-10">
        <h2 className="mb-10 text-4xl font-bold">Services:</h2>
        <div className="grid grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="my-8 flex justify-end">
          <Link to="/services" className="btn btn-outline normal-case btn-wide justify">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
