import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AddReview from "../AddReview/AddReview";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  const { _id: serviceId, name: serviceName } = service;

  // getting reviews for a specific service
  useEffect(() => {
    fetch(`https://assignment-11-server-swart.vercel.app/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceId]);

  // add new review
  const handleAddReview = (event, user) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.reviewText.value;
    const newReview = {
      name: user.displayName,
      img: user.photoURL,
      review_text: reviewText,
      email: user.email,
      service_id: serviceId,
      service_name: serviceName,
    };
    fetch("https://assignment-11-server-swart.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.result?.acknowledged) {
          const updatedReviews = [data.review, ...reviews];
          setReviews(updatedReviews);
          toast.success("Review Added");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        {/* Review Card */}
        <h2 className="text-xl md:text-4xl font-bold text-center mb-6 glass w-fit px-8 py-3 rounded-lg mx-auto">Reviews For This Service</h2>
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
      {/* Add Review */}
      <AddReview handleAddReview={handleAddReview}></AddReview>
    </div>
  );
};

export default Reviews;
