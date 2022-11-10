import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";
import Spinner from "../../Others/Spinner/Spinner";

const Login = () => {
  const [error, setError] = useState("");
  // redirecting state to prevent re-render login form between successful login and Redirection to any other page
  const [redirecting, setRedirecting] = useState(false);
  const { loading, setLoading, signInWithGoogle, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useTitle("Log In");

  // getting the route to be redirected after login
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setRedirecting(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };

        // get jwt token
        fetch("https://assignment-11-server-swart.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // local storage is the not the best place to store jwt token
            localStorage.setItem("foodFly-token", data.token);
            form.reset();
            toast.success("Login Successful!");
            setError("");
            navigate(from, { replace: true });
          });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
        toast.error(e.message);
        setRedirecting(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // sign in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // get jwt token
        fetch("https://assignment-11-server-swart.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // local storage is the not the best place to store jwt token
            localStorage.setItem("foodFly-token", data.token);

            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  };
  // will show spinner while updating user state or redirecting after logIn
  if (loading || redirecting) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-5xl my-2 font-bold">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <form onSubmit={handleSubmit} className="card-body">
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
              <button className="btn btn-primary normal-case">Log In</button>
            </div>
            <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline btn-ghost">
              <FcGoogle />
              <span className="ml-4">Sign In With Google</span>
            </button>
            <label className="label">
              <Link to="/signup" className="label-text-alt link link-hover">
                New to the site? <span className="text-success">Sign Up</span>
              </Link>
              {/* <Link to="/register" state={{ from: location.state?.from }} replace className="label-text-alt link link-hover">
                New to the site? <span className="text-success">Register Here</span>
              </Link> */}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
