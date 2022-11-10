import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

const UpdateReview = () => {
  const review = useLoaderData();
  useTitle("Update Review");

  const handleUpdateReview = (event) => {
    event.preventDefault();
    const reviewText = event.target.reviewText.value;

    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
      },
      body: JSON.stringify({ reviewText: reviewText }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated");
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form onSubmit={handleUpdateReview} className="flex flex-col justify-center items-center w-1/2 my-6">
        <textarea
          className="textarea textarea-bordered w-full"
          name="reviewText"
          placeholder="Your Review"
          defaultValue={review?.review_text}
          required
        ></textarea>
        <input className="btn btn-outline btn-sm md:btn-wide font-bold mt-4 " type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateReview;
