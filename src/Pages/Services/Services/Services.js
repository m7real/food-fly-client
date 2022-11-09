import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Spinner from "../../Others/Spinner/Spinner";

const Services = () => {
  const services = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (services?.length > 0) {
      setLoading(false);
    }
  }, [services]);

  // will show spinner while fetching data
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className=" mx-10 my-10">
      <h2 className="mb-10 text-4xl font-bold">Services:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
