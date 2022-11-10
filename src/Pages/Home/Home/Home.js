import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";
import Banner from "../Banner/Banner";
import Coverage from "../Coverage/Coverage";
import FAQ from "../FAQ/FAQ/FAQ";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <div className=" mx-10 my-10 lg:my-20">
        <h2 className="mb-10 text-4xl font-bold">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="my-8 flex justify-end">
          <Link to="/services" className="btn btn-outline normal-case md:btn-wide justify">
            See All
          </Link>
        </div>
      </div>
      <Coverage></Coverage>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
