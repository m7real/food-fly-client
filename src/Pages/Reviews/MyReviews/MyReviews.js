import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);
  useTitle("My Reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2>My Reviews:{reviews.length}</h2>
      {reviews.map((review) => (
        <MyReviewCard key={review._id} review={review}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
