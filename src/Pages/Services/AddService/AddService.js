import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");

  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const img = form.imgURL.value;
    const price = form.price.value;
    const description = form.description.value;

    const service = {
      name,
      price,
      description,
      img,
    };

    fetch("https://assignment-11-server-swart.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("Successfully Added The Service");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="mx-auto max-w-lg my-12">
      <h2 className="text-4xl font-semibold mx-8  mb-8">Add a new service: </h2>
      <form onSubmit={handleAddService} className="mx-8">
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-4" required />
        <input type="text" name="imgURL" placeholder="Image URL" className="input input-bordered w-full mb-4" required />
        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full mb-4" required />
        <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Service Description" required></textarea>
        <input className="btn btn-primary font-bold w-full mt-4" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
