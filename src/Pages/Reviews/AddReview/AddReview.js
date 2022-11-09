import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Dna } from "react-loader-spinner";
import { Link, useLocation } from "react-router-dom";

const AddReview = ({ handleAddReview }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-[60%] mx-auto my-12">
      {loading ? (
        <Dna visible={true} height="60" width="60" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
      ) : (
        <>
          {user?.uid ? (
            <form onSubmit={(event) => handleAddReview(event, user)} className="flex flex-col justify-center items-center">
              <textarea className="textarea textarea-bordered w-full" name="reviewText" placeholder="Your Review" required></textarea>
              <input className="btn btn-primary font-bold mt-4 w-2/5" type="submit" value="Add Review" />
            </form>
          ) : (
            <div className="text-center">
              <h4 className="text-xl">
                Please{" "}
                <Link className="btn btn-outline btn-sm" to="/login" state={{ from: location }} replace>
                  Login
                </Link>{" "}
                to Add a Review
              </h4>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AddReview;
