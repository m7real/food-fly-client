import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Dna } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Dna visible={true} height="60" width="60" ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="dna-wrapper" />
      </div>
    );
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
