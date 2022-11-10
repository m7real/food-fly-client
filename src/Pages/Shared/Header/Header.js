import React, { useContext } from "react";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, loading, setLoading, logOut } = useContext(AuthContext);

  // Log Out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link className="font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="font-semibold" to="/blog">
          Blog
        </Link>
      </li>
      {user?.uid && (
        <>
          <li>
            <Link className="font-semibold" to="/addService">
              Add Service
            </Link>
          </li>
          <li>
            <Link className="font-semibold" to="/myReviews">
              My Reviews
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-300 shadow-lg py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost" to="/">
          <img className=" rounded-xl w-8" src={logo} alt="" />
        </Link>
        <span className="hidden md:block text-xl font-semibold">Food Fly</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <span className="md:hidden absolute right-1/2 font-semibold">Food Fly</span>
        {loading ? (
          <Dna visible={true} height="48" width="48" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
        ) : (
          <>
            {user?.uid ? (
              <button onClick={handleLogOut} className="btn btn-sm btn-outline">
                Log Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-sm btn-outline">
                Log In
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

//
/*   {
    loading ? (

        <button className="btn-ghost">...</button>

    ) : (
      <>
        {user?.uid ? (

              <button onClick={handleLogOut} className="font-semibold">Log Out</button>
  

        ) : (

            <Link to="/login" className="font-semibold">
              Login
            </Link>

        )}
      </>
    );
  } */
