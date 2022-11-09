import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../../hooks/useTitle";
import toast from "react-hot-toast";
import Spinner from "../../Others/Spinner/Spinner";

const SignUp = () => {
  const [error, setError] = useState("");
  const { loading, setLoading, createUser, updateUserProfile, signInWithGoogle, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useTitle("Sign Up");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Registration Successful!");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // this function update the user's Full Name and photoURL to firebase
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        toast.success("You will be redirected to the login page");
        logOut()
          .then(() => {
            setTimeout(() => {
              navigate("/login");
            }, 1000);
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  };

  // sign in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };

  // will show spinner while updating user state
  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl  md:text-5xl my-2 font-bold">Please Sign Up Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label text-warning">{error}</label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-ghost">
              <FcGoogle />
              <span className="ml-4">Sign In With Google</span>
            </button>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account? <span className="text-success">Login Here</span>
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
