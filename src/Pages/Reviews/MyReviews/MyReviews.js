import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import MyReviewCard from "../MyReviewCard/MyReviewCard";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  useTitle("My Reviews");

  // getting all reviews of the logged in user
  useEffect(() => {
    fetch(`https://assignment-11-server-swart.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }

        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  // delete a review
  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete this review?");
    if (proceed) {
      fetch(`https://assignment-11-server-swart.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Review Deleted");
            const remaining = reviews.filter((review) => review._id !== id);
            setReviews(remaining);
          }
        })
        .catch((er) => console.error(er));
    }
  };

  if (reviews.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[90vh]">
        <h3 className="text-3xl glass rounded-xl px-6 py-3 w-fit">No Reviews Were Added</h3>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold glass px-7 py-3 w-fit mx-auto mt-12 rounded-xl">All of My Reviews</h2>
      {reviews.map((review) => (
        <MyReviewCard
          // prettier-ignore
          key={review._id}
          review={review}
          handleDeleteReview={handleDeleteReview}
        ></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
