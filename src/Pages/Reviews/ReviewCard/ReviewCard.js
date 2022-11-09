import React from "react";

const ReviewCard = ({ review }) => {
  const { id, name, img, review_text, email, service_id, service_name, last_modified } = review;
  const date = new Date(last_modified);
  const time = date.toLocaleTimeString();
  const day = date.toDateString();

  return (
    <div className="card max-w-sm md:max-w-lg lg:max-w-[60%] mx-auto my-8 md:my-12 bg-base-100 shadow-xl p-8">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img className="mr-3 w-10 rounded-full" src={img} alt="" />
          <span className="font-semibold">{name}</span>
        </div>
        <div className="hidden md:block">
          <span className="text-sm">{time}</span>
          <span className="text-sm mx-5">{day}</span>
        </div>
      </div>
      <p>{review_text}</p>
      <div className="mt-4 md:hidden">
        <span className="text-sm">{time}</span>
        <span className="text-sm mx-5">{day}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
