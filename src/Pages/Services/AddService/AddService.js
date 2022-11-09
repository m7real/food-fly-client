import React from "react";

const AddService = () => {
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
  };

  return (
    <div className="mx-auto max-w-lg my-12">
      <h2 className="text-4xl font-semibold mx-8  mb-8">Add a new service: </h2>
      <form onSubmit={handleAddService} className="mx-8">
        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full mb-4" />
        <input type="text" name="imgURL" placeholder="Image URL" className="input input-bordered w-full mb-4" />
        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full mb-4" />
        <textarea className="textarea textarea-bordered w-full" name="description" placeholder="Service Description"></textarea>
        <input className="btn btn-primary font-bold w-full mt-4" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
