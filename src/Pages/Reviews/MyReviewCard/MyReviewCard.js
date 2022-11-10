import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyReviewCard = ({ review, handleDeleteReview }) => {
  const { _id, service_name, review_text, last_modified } = review;
  const date = new Date(last_modified);
  const time = date.toLocaleTimeString();
  const dateString = date.toDateString();

  return (
    <div className="card max-w-sm md:max-w-lg lg:max-w-[60%] mx-auto my-8 md:my-12 bg-base-100 shadow-xl p-8">
      <div className="mb-4 flex items-center justify-between">
        <p>
          <span className="text-sm text-primary">Service:</span> <span className="font-semibold ">{service_name}</span>
        </p>
        <div className="hidden md:block">
          <span className="text-sm">{time}</span>
          <span className="text-sm mx-5">{dateString}</span>
        </div>
      </div>
      <p>
        <span className="text-sm text-primary">Review: </span> {review_text}
      </p>
      <div className="mt-4 md:hidden">
        <span className="text-sm">{time}</span>
        <span className="text-sm mx-5">{dateString}</span>
      </div>
      <div className="flex justify-end items-center  mt-3">
        <button onClick={() => handleDeleteReview(_id)} className="btn btn-ghost">
          <FaTrashAlt />
        </button>
        <Link to={`/updateReview/${_id}`} className="btn btn-outline btn-xs normal-case ml-2 md:mr-5">
          Update
        </Link>
      </div>
    </div>
  );
};

export default MyReviewCard;
