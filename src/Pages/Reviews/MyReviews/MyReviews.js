import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
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

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you sure, you want to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("foodFly-token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Order Removed");
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
      <h2>My Reviews:{reviews.length}</h2>
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
