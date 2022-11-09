import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceId]);

  return (
    <div>
      <div>
        {/* Review Card */}
        <h2 className="text-xl md:text-4xl font-bold text-center mb-6">Reviews For This Service:</h2>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
      {/* Add Review */}
    </div>
  );
};

export default Reviews;
